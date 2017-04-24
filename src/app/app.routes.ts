import { RouterModule, Routes } from "@angular/router";

import {LoginComponent} from './login/login.component';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ClubsNearByComponent} from './home/clubs-near-by.component';
import {MembersComponent} from './members/members.component';

const MY_ROUTES: Routes = [
   //   { path: '', component: AppComponent },

     { path: 'home', component: HomeComponent },
    // { path: 'login', component: LoginComponent },
     { path: 'clubsNearBY', component: ClubsNearByComponent },
     { path: 'api/users', component: MembersComponent }

];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
