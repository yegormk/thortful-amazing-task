import { Directive, inject, Input, OnChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appDisableControlWhen]',
  standalone: true,
})
export class DisableControlWhenDirective implements OnChanges {
  private readonly ngControl = inject(NgControl, { self: true, optional: true });
  private disabledByDirective = false;

  @Input() public appDisableControlWhen = false;

  /**
   * Sync the attached form control disabled state with the directive input.
   */
  public ngOnChanges(): void {
    queueMicrotask(() => this.syncDisabledState());
  }

  /**
   * Apply the requested disabled state after the current change detection turn.
   */
  private syncDisabledState(): void {
    const control = this.ngControl?.control;

    if (!control) {
      return;
    }

    if (this.appDisableControlWhen) {
      if (control.enabled) {
        control.disable({ emitEvent: false });
        this.disabledByDirective = true;
      }
      return;
    }

    if (this.disabledByDirective && control.disabled) {
      control.enable({ emitEvent: false });
      this.disabledByDirective = false;
    }
  }
}
