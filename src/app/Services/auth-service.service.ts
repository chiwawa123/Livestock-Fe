import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLoggedIn= new BehaviorSubject<boolean>(false);
  toggleLogin(state:boolean):void{
    this.isLoggedIn.next(state);
  }
  status(){
    const localData = localStorage.getItem('user');
    if(!localData){
      this.isLoggedIn.next(false);
      console.log("user not logged In");
   
    }else{
      this.isLoggedIn.next(true);
    }
    return this.isLoggedIn.asObservable();
  }
  constructor(private http:HttpClient,private route:Router) { }

  login(data:any){
    return this.http.post(ServerDetails.serverIP + 'Auth/login',data);
  }
  getHeaders(){
    const token:any = localStorage.getItem('user');
    var userObj = JSON.parse(token);
    if (!userObj) {
      userObj = '';
    } else {
      userObj = userObj;
    }
    var user_token = userObj.token;
    
    return new HttpHeaders({
      Accept: 'application/json',
      'content-type':'application/json',
      Authorization: `Bearer `+ user_token,
    });
  }
  payload(token:any){
    const payload= token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload:any){
    return JSON.parse(atob(payload));
  }
  loggedIn(){
    return this.status();
  }
}
