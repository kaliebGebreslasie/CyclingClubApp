import { Injectable,EventEmitter } from '@angular/core';
import{Http} from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import {RequestOptions} from '@angular/http';
import {Headers} from '@angular/http';
@Injectable()
export class ApiService {

  constructor(private authHttp: AuthHttp,private http:Http) { 
  
  }
  getData(path:string){
    return   this.authHttp.get(path);
  }

  postData(path:string,data:any){
 return   this.authHttp.post(path,data);
}
 
 sendData(path:string,data:{}){
    let headers = new Headers({'Content-Type': 'application/json'});  
 headers.append('Authorization','Bearer ')
 let options = new RequestOptions({headers: headers});
    console.log("path"+path);
    return this.authHttp.post(path,data,options);
  }

pushedData=new EventEmitter<any>();

pushData(value:any){

  console.log(value+" this is fro value");
  
 // this.pushedData.emit("value");
}

}
