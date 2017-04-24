import { Component } from '@angular/core';
//import {LoginComponent} from './login/login.component';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { AuthService } from './services/auth.service';
//import { LocalStorageService } from 'angular-2-local-storage';
//import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router';
 
@Component({
    selector: 'app-root',
   // directives: [LoginComponent, ROUTER_DIRECTIVES],
    templateUrl:'./app.component.html' ,
 styleUrls: ['./app.component.css']

  
})
// @RouteConfig([
//     { path: '/home', name: 'Home', component: PrivateComponent, useAsDefault:true },
//     { path: '/login', name: 'Login', component: LoginComponent }
// ])
export class AppComponent {
constructor(private auth: AuthService) {
    // window.localStorage.setItem('profile',"hello");
}
//   login() {
//    //  this. localStorageService.set("k","hello");

//  //   this.auth.login();
//   }
//   logout() {
//     this.auth.logout();
//   }
    
}