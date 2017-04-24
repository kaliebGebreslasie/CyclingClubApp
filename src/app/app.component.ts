import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';

import { AuthService } from './services/auth.service';
import { LocalStorageService } from 'angular-2-local-storage';
//import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router';
 
@Component({
    selector: 'app-root',
   // directives: [LoginComponent, ROUTER_DIRECTIVES],
    template: `
             <div class="toolbar">
      <button (click)="auth.login()">Login</button>
      <button (click)="auth.logout()">Logout</button>
    </div>
   <a [routerLink]="['users']">users </a>
   <router-outlet></router-outlet>
   
        `
})
// @RouteConfig([
//     { path: '/home', name: 'Home', component: PrivateComponent, useAsDefault:true },
//     { path: '/login', name: 'Login', component: LoginComponent }
// ])
export class AppComponent {
constructor(private auth: AuthService, private localStorageService: LocalStorageService) {
    // window.localStorage.setItem('profile',"hello");
}
  login() {
     this. localStorageService.set("k","hello");
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
    
}