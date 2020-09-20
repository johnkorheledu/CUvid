import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Marker} from '../marker'


@Injectable({
  providedIn: 'root'
})
export class MarkerServiceService {

  constructor(private http: HttpClient) { }

  getMarkers() {
    return this.http.get<Marker[]>("http://localhost:3000/markers");
  }




}
