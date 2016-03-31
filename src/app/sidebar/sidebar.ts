import {Component} from 'angular2/core';

@Component({
    selector: 'sidebar',
    styles: [ require('./sidebar.css') ],
    template: `
      <nav>
        <div class="logo">Logo</div>
        <ul>
          <li router-active>
            <a [routerLink]=" ['Index'] ">Home</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Video'] ">Video</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['About'] ">About</a>
          </li>
        </ul>
      </nav>
`
})
export class Sidebar {
    name = 'raphael Santos';
}
