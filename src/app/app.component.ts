/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation,ViewContainerRef } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home';
import { Login } from './login/login.component'
import { RouterActive } from './router-active';
import { LoggedInRouterOutlet } from './router-active/loggedRouter.directive';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive,LoggedInRouterOutlet ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.css')
  ],
  template: `
    <span router-active>
      <button [routerLink]=" ['Index'] ">
        Index
      </button>
    </span>
    <span router-active>
      <button [routerLink]=" ['Home'] ">
        Home
      </button>
    </span>
    <span router-active>
      <button [routerLink]=" ['About'] ">
        About
      </button>
    </span>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
  { path: '/login', name: 'Login', component: Login }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState,private viewContainerRef:ViewContainerRef) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
