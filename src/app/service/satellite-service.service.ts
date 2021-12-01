import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from '../bean/Position';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SatelliteServiceService {

  constructor(private http: HttpClient) { }

  getData(data): Observable<Position[]> {
    let url = environment.serviceip + "iss/satellites?startTime=" + data;
    return this.http.get<Position[]>(url);
  }


}
