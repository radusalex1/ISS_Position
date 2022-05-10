import { ISS } from './iss/ISS';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ISSServiceService {

  endpoint = "https://api.wheretheiss.at/v1/satellites/25544";

  visibility1:string="";

  getData()
  {
    return this.httpClient.get<ISS>(this.endpoint);
  }

  constructor(private httpClient:HttpClient) { }
}
