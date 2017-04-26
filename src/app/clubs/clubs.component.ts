import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-clubs',
  template: `
    <!--<div class="container" *ngIf="events">-->
  <div class="well" *ngIf="events">All Events</div>
<!-- </div>-->
  <ul class="list-group">
                    <li class="list-group-item" *ngFor="let event of events" >{{event.event}}<span class="pull-right">
                    <button *ngIf="condition(event) && show"  class = "btn btn-primary" name="join" (click)="join(event)">Join</button>
                    <button *ngIf="!conditionStart(event)"  class = "btn btn-primary" name="join" (click)="startRide(event)">Start Ride</button></span></li>
    
</ul>
   <button (click)="addEvent()">AddNewEvent</button> <br>
<div class="vertical-menu" *ngIf="formCondition">
  <form [formGroup]="myForm" (ngSubmit)="submitForm(myForm)" class="form-horizontal">
   <div class="form-group">
       <label for="name" class="control-label col-xs-2">Name Of Event</label>
    <input name= "name" type="text" [formControl]="myForm.controls['name']" #name /><br>
  <div *ngIf="!myForm.controls['name'].valid">*Required</div>
 </div>
     <label for="post" >Post Event</label><br>
    <textarea name="post" type="text" [formControl]="myForm.controls['post']" class="form-control" rows="5"></textarea>
    <div *ngIf="!myForm.controls['post'].valid">Minimum Length 10</div><br>
    <input type="submit" value="Post"  class = "btn btn-primary" [disabled]="!myForm.valid" />

  </form>
</div>
      
     

  `,
  styles: []
})
export class ClubsComponent implements OnInit {

  event;club; eventdata; events;clubname;router; myForm: FormGroup;
  _service;
  formCondition = false;
  private subscription: Subscription;
  show:boolean=true;
  //showJoin:

  constructor(private activatedRoute: ActivatedRoute, fb: FormBuilder, _service: ApiService, router:Router) {
    
    ///////////////////////form group////////////
    this.router=router;
    this._service = _service;
    this.myForm = fb.group({
      name: ['', Validators.required],
      post: ['', Validators.compose([Validators.required, this.validatePost])]
    });
    //////////////param/////////////////////////
    this.subscription = activatedRoute.params.subscribe(
      (param: any) =>{ this.club = param['club']}
    );
    
      this.events = JSON.parse(this.club).events;
    this.clubname=JSON.parse(this.club).clubname;
    console.log(this.clubname);
      
  
   
    
    
  }
  /////////////////////add event//////////////////
  addEvent() {
    console.log("reached");
    this.formCondition = true;
  }
  ///////////////////////////join & start button///////////////////////
  condition(event) {
    if ((event.owner == JSON.parse(localStorage.getItem('profile')).name ||
    event.members.indexOf(JSON.parse(localStorage.getItem('profile')).name)>-1)&&this.show==true) {
      return false;
    }
    return true;
  }
  
  conditionStart(event) {
    if (event.owner == JSON.parse(localStorage.getItem('profile')).name ) {
      return false;
    }
    return true;
  }
  /////////////////////validator//////////////////////////
  validatePost(control: FormControl) {
    if (control.value.Length < 10) {
      console.log('valid');
      return { 'invalid': true };
    }
    return null;
  }
  ///////////////////////////submit button/////////////////////////
  submitForm(form) {

    this.eventdata={

      "eventname": this.myForm.value.name,
      "event": this.myForm.value.post,
      "owner": JSON.parse(localStorage.getItem('profile')).name,
      "clubname": this.clubname
    }
     this.formCondition = false;
    
    this._service.postData("http://localhost:4000/EventPost", this.eventdata).subscribe(data => {console.log(data.json());
    this.events.push(this.eventdata)});
  }

  startRide(event ){
      var E=JSON.stringify(event);
      var C=JSON.stringify(this.club);

      
    this.router.navigate(['api','startRide',C,E]);

    /////club this event
  }
  join(event){
console.log(this.club);
    let data={
      clubname:JSON.parse(this.club).clubname,
      eventname:event.eventname,
      member:JSON.parse(localStorage.getItem('profile')).name
    }
      this._service.postData("http://localhost:4000/api/joinEvent", data).subscribe(data => {console.log(data.json())},(err)=>console.log(err)); 
      this.show=false;
      this.show=true;

  }

  ngOnInit() {
  }


}
