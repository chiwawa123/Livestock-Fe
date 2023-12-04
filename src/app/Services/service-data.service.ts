import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerDetails } from '../server-details';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

  constructor(private http:HttpClient) { 
   
  }

  getFarms(){
    return this.http.get(ServerDetails.serverIP + 'Farm');
  }

  addFarm(data:any){
    return this.http.post(ServerDetails.serverIP + 'Farm/addFarm',data);
  }

  removeFarm(data:any){
    return this.http.post(ServerDetails.serverIP + '/deleteFarm',data);
  }
  updateFarm(data:any){
    return this.http.post(ServerDetails.serverIP + '/updateFarm',data);
  }
}
