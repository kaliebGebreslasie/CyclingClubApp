import { Injectable } from '@angular/core';
//import{Http} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ApiService {

  constructor(private authHttp: AuthHttp) { 
  
  }
  getData(path:string){
    return   this.authHttp.get(path);
  }
  postData(path:string,data:any){
 return   this.authHttp.post(path,data);
  }
 
}
