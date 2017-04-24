import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { myRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {AuthService} from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AuthHttp,AuthConfig} from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import {ApiService} from './services/api.service';
import { ClubsNearByComponent } from './home/clubs-near-by.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
 return new AuthHttp(new AuthConfig({
  tokenName: 'id_token',
    noJwtError: true,
		tokenGetter: (() => localStorage.getItem('id_token')),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    HomeComponent,
    

    
    ClubsNearByComponent,
   
  ],
  imports: [
    LocalStorageModule.withConfig({
            prefix: '',
            storageType: 'localStorage'
        }),
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [AuthService ,{
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
