import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Panel } from 'src/app/components/panel/panel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Panel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('thortful-amazing-task');
}
