import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clubs-near-by',
  template: `
   
        <div class="container" *ngIf="clubs">
  <div class="well">Nearby Clubs</div>
</div>
  <ul class="list-group">
                    <li class="list-group-item" *ngFor="let club of clubs" >{{club.clubname}}<span class="pull-right"><button class="btn" name="join" (click)="join(club)">Join</button></span></li>
    
</ul>
<!--<div class="vertical-menu" *ngFor="let club of clubs">
  {{club.clubname}}<button name="join" (click)="join(club)">Join</button>
</div>
      
     
   <div *ngIf="clubs==false"><a href="" >New Club<a> -->
  `,
  styles: []
})
export class ClubsNearByComponent implements OnInit {
  router;
  location = {};
clubs:any[];
member:{};
profile:any;
  constructor(private apiService:ApiService,private Router:Router ) {
this.router=Router;

   }
 setPosition(position){
   console.log("wint");
      this.location = position.coords;
      console.log(  position.coords);
      //position.coords.latituted
      this.apiService.getData("http://localhost:4000/api/clubsNearBy?lat="+position.coords.latitude+"&long="+position.coords.longitude)
      .subscribe(res=>{console.log(res.json());
this.clubs=res.json();

      });

      }
  ngOnInit() {
    console.log("winttttttt");
     if(navigator.geolocation){
       let a={maximumAge:60000, timeout: 30000};
          this.apiService.getData("http://localhost:4000/api/clubsNearBy?lat="+41.0178+"&long="+-91.966)
      .subscribe(res=>{console.log(res.json());   
this.clubs=res.json();


      });

   //   navigator.geolocation.getCurrentPosition(this.setPosition,(err)=>console.log("err"+err),{timeout: 3000000});
      };
   }
  join(club){
   this.profile=JSON.parse(localStorage.getItem('profile'));
   
console.log((this.profile).name);
this.member={name:this.profile.name,email:this.profile.email,picture:this.profile.picture,clubname:club.clubname};
this.apiService.sendData("http://localhost:4000/api/joinClub",this.member).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Request Complete')
    );;
    console.log(club);
    var data=JSON.stringify(club);
    this.router.navigate(['api','clubs',data]);
  }

}
