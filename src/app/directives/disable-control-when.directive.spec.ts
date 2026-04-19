import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { DisableControlWhenDirective } from './disable-control-when.directive';

@Component({
  standalone: true,
  template: `
    <form [formGroup]="form">
      <input formControlName="name" [appDisableControlWhen]="isDisabled" />
    </form>
  `,
  imports: [DisableControlWhenDirective, ReactiveFormsModule],
})
class TestHostComponent {
  public isDisabled = false;
  public form = new FormGroup({
    name: new FormControl('Bengal'),
  });
}

describe('DisableControlWhenDirective', () => {
  it('disables the control when the condition is true', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.isDisabled = true;

    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.componentInstance.form.get('name')?.disabled).toBe(true);
  });

  it('re-enables the control when the condition becomes false', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.isDisabled = true;
    fixture.detectChanges();
    await fixture.whenStable();

    fixture.componentInstance.isDisabled = false;
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.componentInstance.form.get('name')?.enabled).toBe(true);
  });

  it('does not enable a control that was already disabled before the directive ran', async () => {
    const fixture = TestBed.createComponent(TestHostComponent);
    fixture.componentInstance.form.get('name')?.disable();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.componentInstance.form.get('name')?.disabled).toBe(true);
  });
});
