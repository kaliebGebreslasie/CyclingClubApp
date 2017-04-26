import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-liveride',
  template: `
  <style>
  .sebm-google-map-container {
  height: 300px;
}
</style>
    <p>
     Live Rides
    </p>
      <p>
     <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
    
  <sebm-google-map-marker *ngFor="let event of events"     [latitude]="event.location.coordinates[1]" [longitude]="event.location.coordinates[0]">
  <sebm-google-map-info-window>
          <strong>{{event.eventname}}</strong>
        </sebm-google-map-info-window>
  </sebm-google-map-marker>
  
</sebm-google-map> 
    </p>
  `,
  styles: []
})
export class LiverideComponent implements OnInit {
profile:any;
lat: number ;
  lng: number ;
  lt=41.100;
ln=-91.900;
l:number;
zoom:number=13;
eventname:string;
events:any[]=[];
  constructor(private apiService:ApiService) {
    
   }
   setPosition(position){
     console.log("llllllll");
    
       this.l = position.coords.latitude;
         console.log(position.coords.latitude);
       this.lng = position.coords.longitude;
      console.log("hh"+position.coords);
   }

  ngOnInit() {
    if(navigator.geolocation){
      
     navigator.geolocation.getCurrentPosition((position)=>{
      console.log("helo");
     console.log(this.lat);
     this.profile=JSON.parse(localStorage.getItem('profile'));
    this. lat = position.coords.latitude;
        
      this. lng = position.coords.longitude;
       this.apiService.getData("http://localhost:4000/api/liveRide?memberName="+this.profile.name+"&lat="+this.lat+"&lng="+this.lng).subscribe(
  res=>{//console.log(res.json()[0].events[0].location.coordinates)
    let events:any[]=[];
for(let club of res.json()){
  for(let event of club.events){
    events.push(event);
    
  }
 
}
this.events=events;
this.eventname=this.events[0].eventname;
 console.log(this.events);
// this.lng=res.json()[0].events[0].location.coordinates[0];
// this.lat=res.json()[0].events[0].location.coordinates[1]

  },err=>console.log("errr"+err));
      
     },(err)=>console.log("err"+err));
    
     

  //  this.profile=JSON.parse(localStorage.getItem('profile'));
}
  }

}
