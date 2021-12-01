import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Position } from '../bean/Position';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SatelliteServiceService {

  constructor(private http: HttpClient) { }

  getData(data) {
    let url = environment.serviceip + "iss/satellites?startTime=" + data.startTime;
    return this.http.get<Position[]>(url);
  }


}
