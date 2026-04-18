import { of, throwError } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CatApi } from 'src/app/services/cat-api';
import { CatsStore } from 'src/app/store/cats-store';
import { CatBreed } from 'src/app/interfaces/cat-breed.interface';

import { BreedsLibrary } from './breeds-library';

describe('BreedsLibrary', () => {
  let catApi: { getBreeds: ReturnType<typeof vi.fn> };
  let snackBar: { open: ReturnType<typeof vi.fn> };

  beforeEach(async () => {
    catApi = {
      getBreeds: vi.fn(),
    };
    snackBar = {
      open: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [BreedsLibrary],
      providers: [
        CatsStore,
        { provide: CatApi, useValue: catApi },
        { provide: MatSnackBar, useValue: snackBar },
      ],
    }).compileComponents();
  });

  function createBreed(overrides: Partial<CatBreed> = {}): CatBreed {
    return {
      adaptability: 5,
      affection_level: 5,
      alt_names: '',
      child_friendly: 5,
      country_code: 'US',
      country_codes: 'US',
      description: 'Test description',
      dog_friendly: 4,
      energy_level: 4,
      experimental: 0,
      grooming: 2,
      hairless: 0,
      health_issues: 2,
      hypoallergenic: 0,
      id: 'beng',
      image: {
        id: 'img-1',
        url: 'https://cats.test/1.jpg',
        width: 100,
        height: 100,
      },
      indoor: 0,
      intelligence: 5,
      life_span: '12-15',
      name: 'Bengal',
      natural: 0,
      origin: 'United States',
      rare: 0,
      reference_image_id: 'img-1',
      rex: 0,
      shedding_level: 3,
      short_legs: 0,
      social_needs: 4,
      stranger_friendly: 3,
      suppressed_tail: 0,
      temperament: 'Alert',
      vetstreet_url: null,
      vocalisation: 3,
      weight: {
        imperial: '8 - 15',
        metric: '4 - 7',
      },
      wikipedia_url: 'https://example.com',
      breed_group: null,
      ...overrides,
    };
  }

  it('loads breeds on init when the store is empty', () => {
    catApi.getBreeds.mockReturnValue(of([createBreed()]));

    const fixture = TestBed.createComponent(BreedsLibrary);
    fixture.detectChanges();

    expect(catApi.getBreeds).toHaveBeenCalledOnce();
    expect(fixture.componentInstance.catsStore.breeds()[0].id).toBe('beng');
  });

  it('does not reload breeds on init when the store already has data', () => {
    const fixture = TestBed.createComponent(BreedsLibrary);
    fixture.componentInstance.catsStore.addBreeds([createBreed({ id: 'abys', name: 'Abyssinian', origin: 'Egypt' })]);

    fixture.detectChanges();

    expect(catApi.getBreeds).not.toHaveBeenCalled();
  });

  it('shows a snackbar and clears loading on load error', () => {
    catApi.getBreeds.mockReturnValue(throwError(() => new Error('network')));

    const fixture = TestBed.createComponent(BreedsLibrary);
    fixture.detectChanges();

    expect(fixture.componentInstance.catsStore.breedsLoading()).toBe(false);
    expect(snackBar.open).toHaveBeenCalledWith('Error: network', '', { duration: 3000 });
  });

  it('filters breeds by search query across name, origin, and temperament', () => {
    const fixture = TestBed.createComponent(BreedsLibrary);
    const component = fixture.componentInstance;

    component.catsStore.addBreeds([
      createBreed(),
      createBreed({ id: 'sphy', name: 'Sphynx', origin: 'Canada', temperament: 'Loyal' }),
    ]);

    component.searchForm.query().value.set('canada');

    expect(component.filteredBreeds().map((breed) => breed.id)).toEqual(['sphy']);
  });
});
