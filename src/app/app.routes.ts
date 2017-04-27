import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClubsNearByComponent } from './home/clubs-near-by.component';
import { MembersComponent } from './members/members.component';
import { EventpostComponent } from './eventpost/eventpost.component';
import { AnnouncmentpostComponent } from './announcmentpost/announcmentpost.component';
import { NewclubComponent } from './newclub/newclub.component';
import { EventgetComponent } from './eventget/eventget.component';

import { ClubsComponent } from './clubs/clubs.component';
import { MemberdetailsComponent } from './memberdetails/memberdetails.component';

import {StartrideComponent} from './startride/startride.component';
import {LiverideComponent} from './liveride/liveride.component';
import { MyclubsComponent } from './myclubs/myclubs.component';
const MY_ROUTES: Routes = [
  //   { path: '', component: AppComponent },

  { path: 'home', component: HomeComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'clubsNearBY', component: ClubsNearByComponent },
  { path: 'api/startRide/:club/:event', component: StartrideComponent },
  { path: 'api/users', component: MembersComponent },
  { path: 'api/addevent', component: EventpostComponent },
 // { path: 'api/announcement', component: AnnouncmentpostComponent },
  { path: 'api/newclub', component: NewclubComponent },
  { path: 'api/getevent', component: EventgetComponent },

   { path: 'club', component: ClubsComponent },
   { path: 'club/announcement', component: AnnouncmentpostComponent },
   { path: 'club/userdetails', component: MemberdetailsComponent },
   { path: 'api/startRide/:club/:event', component: ClubsComponent },
   { path: 'club/newClub', component: NewclubComponent },

  { path: 'api/clubs/:club', component: ClubsComponent },
  { path: 'liveRide', component: LiverideComponent },
  { path: 'myclubs', component: MyclubsComponent },
  
  // { path: 'api/startRide/:club/:event', component: ClubsComponent },





];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
