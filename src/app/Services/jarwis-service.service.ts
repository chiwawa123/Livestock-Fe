import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegServiceeService } from './reg-servicee.service';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class JarwisServiceService {

  header:any;

  constructor(private http:HttpClient,private headers:RegServiceeService) { 
    this.header=headers.getHeaders();
  }

  signUp(data:any){

    return this.http.post(ServerDetails.serverIP + 'Auth/Register', data,{headers:this.header})
  }

}
