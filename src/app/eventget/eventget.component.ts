import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-eventget',
  template: `
    <p>
      eventget Works!
    </p>
  `,
  styles: []
})
export class EventgetComponent implements OnInit {
profile;
event:any;
  constructor(_service: ApiService) {
    this.profile=JSON.parse(localStorage.getItem('profile'));
    _service.getData("http://localhost:4000/eventpost?name=henok").subscribe(res => {this.event=res});
   // var result = this.event.map(function(a) {return a.owner});

   // console.log("this is back data "+result);
    
    
   }

  ngOnInit() {
  }

}
