import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsLibrary } from './breeds-library';

describe('BreedsLibrary', () => {
  let component: BreedsLibrary;
  let fixture: ComponentFixture<BreedsLibrary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreedsLibrary],
    }).compileComponents();

    fixture = TestBed.createComponent(BreedsLibrary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
