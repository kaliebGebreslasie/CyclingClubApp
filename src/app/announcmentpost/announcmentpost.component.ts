import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-announcmentpost',
  template: `
 <div class="well">{{clubname}} Announcements</div>
<ul>
                    <li class="list-group-item" *ngFor="let announcment of announcments"> {{announcment.announcment}}<span class="pull-right"> </span></li>
                    
    </ul>
    

   <button (click)="addEvent()">AddNewAnnouncement</button> <br>
  <div class="vertical-menu" *ngIf="formCondition">
    <form [formGroup]="myForm" (ngSubmit)="submitForm(myForm)" class="form-horizontal">

     <label for="post" >Post Announcemnet</label><br>
    <textarea name="post" type="text" [formControl]="myForm.controls['post']" class="form-control" rows="5"></textarea>
    <div *ngIf="!myForm.controls['post'].valid">Minimum Length 10</div><br>
    <input type="submit" value="Post"  class = "btn btn-primary" [disabled]="!myForm.valid" />

  </form>
</div>
  
  `,
  styles: []
})
export class AnnouncmentpostComponent {
formCondition=false;
announcments:any[];
club=""
clubname="";
announcmentdata;

  myForm: FormGroup;
  _service;
  constructor(private activatedRoute: ActivatedRoute,fb: FormBuilder, _service: ApiService,router:Router) {
    this._service = _service;
    this._service = _service;
    this.myForm = fb.group({
      post: ['', Validators.compose([Validators.required, this.validatePost])]
    });

activatedRoute.queryParams.subscribe(
      //(param: any) => this.club = param['club']
      (param: any) => {this.club = param['club']
      console.log(this.club);});

    this.announcments = JSON.parse(this.club).announcments;
    this.clubname=JSON.parse(this.club).clubname;
    console.log(this.clubname);
}
  
   addEvent() {
    console.log("reached");
    this.formCondition = true;
  }

   submitForm(form) {
 
     
 this.announcmentdata={
      "announcment": this.myForm.value.post,
       "owner": JSON.parse(localStorage.getItem('profile')).name,
      "clubname": this.clubname
    }
    console.log(JSON.parse(localStorage.getItem('profile')).name);
    
     this.formCondition = false;
    
    this._service.postData("http://localhost:4000/announcmentpost", this.announcmentdata).subscribe(data => {console.log(data);
      this.announcments.push(this.announcmentdata)},
      (err)=>console.log(err) );
  }


  validatePost(control: FormControl) {
    if (control.value.Length < 10) {
      console.log('valid');
      return { 'invalid': true };
    }
    return null;
  }

}
