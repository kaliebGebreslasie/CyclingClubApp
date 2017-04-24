import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-members',
  template: `
    <h2>Users</h2>
{{users}}
<ul>
      <li *ngFor="let user of users">
        <img [src]="user.image">
        <span>{{user.name}}</span>
      </li>
    </ul>
  `,
  styles: []
})
export class MembersComponent implements OnInit {

  users: any[];
  constructor(private authHttp: AuthHttp,private apiService:ApiService) {}
  ngOnInit() {
    console.log(  localStorage.getItem('profile'));
    this.apiService.getData('http://localhost:4000/api/users')
    //this.authHttp.get('http://localhost:4000/api/users')
      .map(res => res.json())
      .subscribe(
        users => {this.users = users;console.log(users)},
        error => console.log(error)
      );
  }

}
