import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myclubs',
  template: `

   <div class="well">{{clubname}} MY CLUBS</div>

                    <li (click)=Clubpage(club) class="list-group-item" *ngFor="let club of clubs"> {{club.clubname}}<span class="pull-right"> </span></li>
                    
    
  `,
  styles: []
})
export class MyclubsComponent  {
user;clubs;router;
  constructor(_service: ApiService,router:Router) { 
    this.router=router;
    this.user=JSON.parse(localStorage.getItem('profile')).name
   // console.log(this.user);
    
     _service.getData("http://localhost:4000/?name="+this.user).subscribe(
       data=>this.clubs=data.json()
     ,(err)=>console.log(err))
   //  console.log(this.clubs);
    }
    Clubpage(club){
console.log("entered");

   var data=JSON.stringify(club);
    this.router.navigate(['club'], {queryParams:{'club':data}});
    }

  

}
