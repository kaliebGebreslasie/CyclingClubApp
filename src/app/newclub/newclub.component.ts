import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-newclub',
  template: `
  

  <form [formGroup]="myForm" (ngSubmit)="submitForm(myForm)" class="form-horizontal">
   <div class="form-group">
       <label for="name" class="control-label col-xs-2">Club Name</label>
    <input name= "name" type="text" [formControl]="myForm.controls['name']" #name /><br>
  <div *ngIf="!myForm.controls['name'].valid">*Required</div>
 </div>
     <label for="post" >Post Event</label><br>
    <textarea name="post" type="text" [formControl]="myForm.controls['post']" class="form-control" rows="5"></textarea>
    <div *ngIf="!myForm.controls['post'].valid">Minimum Length 10</div><br>
  
     
     <label for="post1" >Post Announcemnet</label><br>
    <textarea name="post1" type="text" [formControl]="myForm.controls['post1']" class="form-control" rows="5"></textarea>
    <div *ngIf="!myForm.controls['post1'].valid">Minimum Length 10</div><br>
 <input type="submit" value="Post"  class = "btn btn-primary" [disabled]="!myForm.valid" />
  </form>

  
  `,
  styles: []
})
export class NewclubComponent {

myForm: FormGroup;
  _service;router;
  constructor(fb: FormBuilder, _service: ApiService,router:Router) {
    this._service = _service;this.router=router;
    this.myForm = fb.group({
       name:['',Validators.required],
      post: ['', Validators.compose([Validators.required, this.validatePost])],
      post1: ['', Validators.compose([Validators.required, this.validatePost])]
    });
  }

  submitForm(form) {
    console.log(JSON.stringify(form.value.name)+" dksfsdhjfbjhzx");
    let data={
      "clubname":JSON.stringify(form.value.name),
      "owner":JSON.parse(localStorage.getItem('profile')).name,
      "announcments":JSON.stringify(form.value.post),
      "events":JSON.stringify(form.value.post1)

    }
    this._service.postData("http://localhost:4000/addclub", data).subscribe(data => console.log(data.json()));
    this.router.navigate(['club'])
  } 

  validatePost(control: FormControl) {
    if (control.value.Length < 10) {
      console.log('valid');
      return { 'invalid': true };
    }
    return null;
  }

}

