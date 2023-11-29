import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegServiceeService {
 

  constructor() {}


  getHeaders() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer` + token,
    });
    // console.log('headers  ', headers);
    return headers;
  }
}
