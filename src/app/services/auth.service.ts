import { Injectable } from '@angular/core';
declare var Auth0Lock: any
@Injectable()
export class AuthService {

  lock = new Auth0Lock('WnoqRrrS5k6PX7o67juJi0hDlzCvudls', 'kalebgebre.auth0.com');

 login() {
   this.lock.show((error: string, profile: Object, id_token: string) => {
     if (error) {
       console.log(error);
     }
     // We get a profile object for the user from Auth0
     window.localStorage.setItem('profile', JSON.stringify(profile));
   //   window.sessionStorage.setItem('profile',"hello");
     // localStorage['profile']=JSON.stringify(profile)
     console.log("profile"+profile);
     // We also get the user's JWT
     localStorage.setItem('id_token', id_token);
     console.log("id_token"+id_token);
   });
 }

 logout() {
   // To log out, we just need to remove
   // the user's profile and token
   localStorage.removeItem('profile');
   localStorage.removeItem('id_token');
 }

}
