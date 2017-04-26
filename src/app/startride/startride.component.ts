import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-liveride',
  template: `
  <style>
  .sebm-google-map-container {
  height: 300px;
}
  </style>
    <p>
     <sebm-google-map [latitude]="lat" [longitude]="lng">
  <sebm-google-map-marker [latitude]="lat" [longitude]="lng"></sebm-google-map-marker>
</sebm-google-map>
    </p>
  `,
  styles: []
})
export class StartrideComponent implements OnInit {
title: string = 'My first angular2-google-maps project';
  lat: number;
  lng: number;
  data:{};
  club:any;
  event:any;
  constructor(private apiService:ApiService,private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
        (param: any) =>{this.club = param['club'];
        this.event = param['event']
        this.club=JSON.parse(this.club);
      this.event=JSON.parse(this.event);}
    );
   }

  ngOnInit() {
     if(navigator.geolocation){
       

   // navigator.geolocation.getCurrentPosition(this.setPosition,(err)=>console.log("err"+err));
   navigator.geolocation.getCurrentPosition((position)=>{
 console.log("wint");
      console.log( "pos"+ position.coords.latitude);
      this.lat = position.coords.latitude;//+
      this.lng = position.coords.longitude;//-
      console.log( "pos"+ position);
this.data={clubName:this.club.name,eventname:this.event.eventname,lng:this.lng,lat:this.lat}
 this.apiService.sendData("http://localhost:4000/api/startRide",this.data).subscribe(res=>console.log(res.json()));

   },(err)=>console.log("err"+err));
      };
   
  }
  setPosition(position){
  
      //position.coords.latituted
     

      }

}
