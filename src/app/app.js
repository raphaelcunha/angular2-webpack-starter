var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Angular 2 decorators and services
 */
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var home_1 = require('./home');
var about_1 = require('./about');
var video_1 = require('./video');
var sidebar_1 = require('./sidebar');
var header_1 = require('./header');
var App = (function () {
    function App() {
        this.name = 'Angular 2 Webpack Starter';
    }
    App.prototype.ngOnInit = function () {
        console.log('Initial App State');
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            pipes: [],
            providers: [],
            directives: [sidebar_1.Sidebar, header_1.Header],
            styleUrls: ['./app/app.css'],
            template: "\n    <sidebar></sidebar>\n      <header></header>\n      <router-outlet></router-outlet>\n    <footer></footer>\n  "
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Index', component: home_1.Home, useAsDefault: true },
            { path: '/video', name: 'Video', component: video_1.Video },
            { path: '/about', name: 'About', component: about_1.About },
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map