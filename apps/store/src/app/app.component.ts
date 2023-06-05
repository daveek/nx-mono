import { exampleProducts } from '@daveek/products';
import { CommonUiModule } from './../../../../libs/common-ui/src/lib/common-ui.module';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonUiModule, CommonModule],
  selector: 'daveek-root',
  template: `
    <daveek-banner title="Welcome to the store!"> </daveek-banner>
    <ul>
      <li *ngFor="let product of products">
        <strong>{{ product.name }}</strong> Price: {{ product.price }}
      </li>
    </ul>
  `,
})
export class AppComponent {
  products = exampleProducts;
}
