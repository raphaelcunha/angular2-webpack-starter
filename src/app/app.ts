/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {About} from './about';
import {Video} from './video';

import {Sidebar} from './sidebar';
import {Header} from './header';


@Component({
    selector: 'app',
    pipes: [],
    providers: [],
    directives: [Sidebar, Header],
    styleUrls: ['./app/app.css'],
    template: `
    <sidebar></sidebar>
      <header></header>
      <router-outlet></router-outlet>
    <footer></footer>
  `
})
@RouteConfig([
    {path: '/', name: 'Index', component: Home, useAsDefault: true},
    {path: '/video', name: 'Video', component: Video},
    {path: '/about', name: 'About', component: About},
])
export class App {
    name = 'Angular 2 Webpack Starter';

    ngOnInit() {
        console.log('Initial App State');
    }

}
