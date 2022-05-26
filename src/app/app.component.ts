import { Component } from '@angular/core';
import { NestedListItem } from './nested-list.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: NestedListItem[];

  constructor() {
    let item1 : NestedListItem = {
      template: 'world'
    };

    let header1 : NestedListItem = {
        children: [item1]
    }

    this.items = [header1];
  }
}
