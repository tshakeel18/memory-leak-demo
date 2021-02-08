import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="block">
      <div class="top-bar">
        <a routerLink="route1">Route 1</a>
        <a routerLink="route2">Route 2</a>
      </div>
      <router-outlet></router-outlet>
    </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'memory-leak-test';
}
