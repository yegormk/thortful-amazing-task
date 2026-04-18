import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyStateMessage } from './empty-state-message';

describe('EmptyStateMessage', () => {
  let component: EmptyStateMessage;
  let fixture: ComponentFixture<EmptyStateMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateMessage],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStateMessage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
