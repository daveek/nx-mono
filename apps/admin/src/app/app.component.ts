import { CommonUiModule } from './../../../../libs/common-ui/src/lib/common-ui.module';
import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, CommonUiModule],
  selector: 'daveek-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<daveek-banner
    title="Welcome to Admin Banner app"
  ></daveek-banner>`,
})
export class AppComponent {
  title = 'admin';
}
