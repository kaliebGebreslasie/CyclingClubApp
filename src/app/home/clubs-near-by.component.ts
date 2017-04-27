import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clubs-near-by',
  template: `

        <div *ngIf="clubs">
  <div class="well">Nearby Clubs</div>
</div>
  <ul class="list-group">
  <input class="form-control"  #myInput placeholder="Search ..." [(ngModel)]="name" (input)="filterItem(myInput.value)"/>

                    <li class="list-group-item" *ngFor="let club of filteredclubs" >{{club.clubname}}<span class="pull-right">

                    <button class="btn" name="join" (click)="join(club)">Join</button></span></li>
    
</ul>
<!--<div class="vertical-menu" *ngFor="let club of clubs">
  {{club.clubname}}<button name="join" (click)="join(club)">Join</button>
</div>-->
      
     <div *ngIf="clubs==false"></div>
   <button class="btn" name="join" (click)="create()">New Club</button> 
  `
  ,
  styles: []
})
export class ClubsNearByComponent implements OnInit {
  router;
  location = {};
clubs:any[];
filteredclubs:any[];
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
  this.profile=JSON.parse(localStorage.getItem('profile'));
     if(navigator.geolocation){
       let a={maximumAge:60000, timeout: 30000};
          this.apiService.getData("http://localhost:4000/api/clubsNearBy?lat="+41.0178+"&long="+-91.966+"&membername="+this.profile.name)
      .subscribe(res=>{console.log(res.json());   
this.clubs=res.json();
this.assignCopy()


      },err=>console.log("err"+err));

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
    this.router.navigate(['club'], {queryParams:{'club':data}});
     
  }

  create(){
     this.router.navigate(['club','newClub'])
  }



assignCopy(){
   this.filteredclubs = Object.assign([], this.clubs);
}
filterItem(value){
  console.log("filter");
  
   if(!value) this.assignCopy(); //when nothing has typed
   this.filteredclubs = Object.assign([], this.clubs).filter(
      club => club.clubname.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
}
}
