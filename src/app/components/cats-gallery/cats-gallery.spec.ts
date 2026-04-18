import { TestBed } from '@angular/core/testing';

import { CatsStore } from 'src/app/store/cats-store';

import { CatsGallery } from './cats-gallery';

describe('CatsGallery', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsGallery],
      providers: [CatsStore],
    }).compileComponents();
  });

  it('paginates pictures using pageIndex and pageSize', () => {
    const fixture = TestBed.createComponent(CatsGallery);
    const component = fixture.componentInstance;

    component.catsStore.addCatsPictures([
      { id: '1', url: '1', width: 1, height: 1 },
      { id: '2', url: '2', width: 1, height: 1 },
      { id: '3', url: '3', width: 1, height: 1 },
      { id: '4', url: '4', width: 1, height: 1 },
      { id: '5', url: '5', width: 1, height: 1 },
      { id: '6', url: '6', width: 1, height: 1 },
    ]);
    component.pageSize.set(2);
    component.pageIndex.set(1);

    expect(component.paginatedPictures().map((image) => image.id)).toEqual(['3', '4']);
  });

  it('updates pagination state from paginator events', () => {
    const fixture = TestBed.createComponent(CatsGallery);
    const component = fixture.componentInstance;

    component.onPageChange({ pageIndex: 2, pageSize: 10, length: 40, previousPageIndex: 1 });

    expect(component.pageIndex()).toBe(2);
    expect(component.pageSize()).toBe(10);
  });
});
