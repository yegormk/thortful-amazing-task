import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsGallery } from './cats-gallery';

describe('CatsGallery', () => {
  let component: CatsGallery;
  let fixture: ComponentFixture<CatsGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(CatsGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
