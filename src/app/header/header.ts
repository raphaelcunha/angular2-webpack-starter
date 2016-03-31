import {Component} from 'angular2/core';

@Component({
    selector: 'header',
    styleUrls: ['./app/header/header.css'],
    template: `
      <nav>
        <ul>
          <li>
          <img src="assets/img/angular-logo.png" width="25" height="25" />
            <a>Angular.js</a>
          </li>

        </ul>
      </nav>
`
})
export class Header {
    name = 'raphael Santos';
}
