import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-empty-state-message',
  templateUrl: './empty-state-message.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyStateMessage {
  public message = input('Oops... Something went wrong.');
  public submessage = input('');
}
