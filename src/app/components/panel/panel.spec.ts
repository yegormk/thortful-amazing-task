import { of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CatApi } from 'src/app/services/cat-api';
import { LocalStorageHelperService } from 'src/app/services/local-storage-helper';
import { CatsStore } from 'src/app/store/cats-store';

import { Panel } from './panel';

describe('Panel', () => {
  let catApi: { getBreeds: ReturnType<typeof vi.fn>; getImagesOfSpecificBreed: ReturnType<typeof vi.fn> };
  let snackBar: { open: ReturnType<typeof vi.fn> };
  let localStorageHelper: {
    getData: ReturnType<typeof vi.fn>;
    saveData: ReturnType<typeof vi.fn>;
  };

  beforeEach(async () => {
    catApi = {
      getBreeds: vi.fn(),
      getImagesOfSpecificBreed: vi.fn(),
    };
    snackBar = {
      open: vi.fn(),
    };
    localStorageHelper = {
      getData: vi.fn((key: string) => {
        if (key === 'quantityOfPictures') {
          return 15;
        }
        return null;
      }),
      saveData: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [Panel],
      providers: [
        CatsStore,
        { provide: CatApi, useValue: catApi },
        { provide: MatSnackBar, useValue: snackBar },
        { provide: LocalStorageHelperService, useValue: localStorageHelper },
      ],
    }).compileComponents();
  });

  it('initializes the form from local storage defaults', () => {
    catApi.getBreeds.mockReturnValue(of([]));
    catApi.getImagesOfSpecificBreed.mockReturnValue(of([]));

    const fixture = TestBed.createComponent(Panel);
    fixture.detectChanges();

    expect(fixture.componentInstance.searchParamsForm.get('quantityOfPictures')?.value).toBe(15);
  });

  it('loads breeds on init when the store is empty', () => {
    catApi.getBreeds.mockReturnValue(
      of([{ id: 'beng', name: 'Bengal', origin: 'US', temperament: 'Alert' }]),
    );
    catApi.getImagesOfSpecificBreed.mockReturnValue(of([]));

    const fixture = TestBed.createComponent(Panel);
    fixture.detectChanges();

    expect(catApi.getBreeds).toHaveBeenCalledOnce();
    expect(fixture.componentInstance.catsStore.breeds()[0].id).toBe('beng');
  });

  it('filters breeds using the typed input value', () => {
    const fixture = TestBed.createComponent(Panel);
    const component = fixture.componentInstance;

    component.catsStore.addBreeds([
      { id: 'beng', name: 'Bengal', origin: 'US', temperament: 'Alert' } as never,
      { id: 'sphy', name: 'Sphynx', origin: 'Canada', temperament: 'Loyal' } as never,
    ]);

    // @ts-expect-error Angular types loadComponent() too broadly for direct name access here.
    expect((component).filterBreeds('sph').map((breed: { id: string }) => breed.id)).toEqual(
      ['sphy']
    );
  });

  it('returns the breed name for autocomplete display', () => {
    const fixture = TestBed.createComponent(Panel);

    expect(
      fixture.componentInstance.displayBreedsFn({
        id: 'beng',
        name: 'Bengal',
      } as never),
    ).toBe('Bengal');
  });

  it('loads pictures and persists the chosen search params', () => {
    catApi.getBreeds.mockReturnValue(of([]));
    catApi.getImagesOfSpecificBreed.mockReturnValue(
      of([{ id: '1', url: 'https://cats.test/1.jpg', width: 100, height: 100 }]),
    );

    const fixture = TestBed.createComponent(Panel);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    component.searchParamsForm.patchValue({
      chosenBreed: { id: 'beng', name: 'Bengal' },
      quantityOfPictures: 20,
    });

    component.getCatsPictures();

    expect(catApi.getImagesOfSpecificBreed).toHaveBeenLastCalledWith('beng', 20);
    expect(component.catsStore.catsPictures()[0].id).toBe('1');
    expect(localStorageHelper.saveData).toHaveBeenCalledWith('chosenBreed', {
      id: 'beng',
      name: 'Bengal',
    });
    expect(localStorageHelper.saveData).toHaveBeenCalledWith('quantityOfPictures', 20);
  });

  it('shows a snackbar and disables the breed control when breed loading fails', () => {
    catApi.getBreeds.mockReturnValue(throwError(() => new Error('no breeds')));
    catApi.getImagesOfSpecificBreed.mockReturnValue(of([]));

    const fixture = TestBed.createComponent(Panel);
    fixture.detectChanges();

    expect(fixture.componentInstance.searchParamsForm.get('chosenBreed')?.disabled).toBe(true);
    expect(snackBar.open).toHaveBeenCalledWith('Error: no breeds', '', { duration: 3000 });
  });

  it('shows a snackbar and clears picture loading when picture loading fails', () => {
    catApi.getBreeds.mockReturnValue(of([]));
    catApi.getImagesOfSpecificBreed.mockReturnValue(throwError(() => new Error('no images')));

    const fixture = TestBed.createComponent(Panel);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    component.searchParamsForm.patchValue({
      chosenBreed: { id: 'beng', name: 'Bengal' },
    });
    component.getCatsPictures();

    expect(component.catsStore.catsPicturesLoading()).toBe(false);
    expect(snackBar.open).toHaveBeenCalledWith('Error: no images', '', { duration: 3000 });
  });
});
