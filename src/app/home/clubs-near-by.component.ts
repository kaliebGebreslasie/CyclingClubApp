import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-clubs-near-by',
  template: `
    <p>
      clubs-near-by Works!
      <ul>
      <li *ngFor="let club of clubs">{{club.name}}</li>
      </ul>
    </p>
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
      this.apiService.getData("http://localhost:4000/api/clubsNearBy?lat="+position.coords.latitude+"&lon="+position.coords.longitude)
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
