import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-clubs-near-by',
  template: `
  <style>
.vertical-menu {
    width: 200px;
}

.vertical-menu a {
    background-color: #eee;
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
}

.vertical-menu a:hover {
    background-color: #ccc;
}

.vertical-menu a.active {
    background-color: #4CAF50;
    color: white;
}
</style>
     <div *ngIf="clubs">
      clubs-near-by Works!
        </div>

<div class="vertical-menu" *ngFor="let club of clubs">
  <a href="#">{{club.clubname}}</a>
</div>
      
     
   <div *ngIf="clubs==false"><a href="" >New Club<a>
  `,
  styles: []
})
export class ClubsNearByComponent implements OnInit {
  location = {};
clubs:any[];
  constructor(private apiService:ApiService ) {


   }
 setPosition(position){
      this.location = position.coords;
      console.log(  position.coords);
      this.apiService.getData("http://localhost:4000/api/clubsNearBy?lat="+position.coords.latitude+"&long="+position.coords.longitude)
      .subscribe(res=>{console.log(res.json());
this.clubs=res.json();
      });

      }
  ngOnInit() {
     if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
   }
  

}
