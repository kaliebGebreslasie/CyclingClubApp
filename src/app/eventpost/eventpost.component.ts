import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-eventpost',
  template: `
   <form [formGroup]="myForm" (ngSubmit)="submitForm(myForm)">
     <label for="post" >Post Event</label><br>
    <textarea name="post" type="text" [formControl]="myForm.controls['post']" ></textarea>
    <div *ngIf="!myForm.controls['post'].valid">Minimum Length 10</div><br>
    <input type="submit" value="Submit" [disabled]="!myForm.valid" />
    <input type="submit" value="Get Data" (click)="getData(myForm.controls['name'].value)"/>
  </form>
  
  `,
  styles: []
})
export class EventpostComponent {

  myForm: FormGroup;
  _service;
  constructor(fb: FormBuilder, _service: ApiService) {
    this._service = _service;
    this.myForm = fb.group({
      post: ['', Validators.compose([Validators.required, this.validatePost])]
    });
  }

  submitForm(form) {
    console.log(form.value);
    this._service.postData("http://localhost:4000/eventpost", form.value).subscribe(data => console.log(data.json()));
  }

  validatePost(control: FormControl) {
    if (control.value.Length < 10) {
      console.log('valid');
      return { 'invalid': true };
    }
    return null;
  }

}