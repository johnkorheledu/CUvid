import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marker } from '../marker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarkerServiceService {
  clickLng;
  clickLat;
  clickDesc;
  clickIncident;
  markers = [];

  constructor(private http: HttpClient) {}

  getMarkers() {
    return this.http.get<Marker[]>('http://localhost:3000/markers');
  }

  addMarker(marker: Marker): Observable<Marker> {
    return this.http.post<Marker>('http://localhost:3000/markers', marker);
  }

  setClickLat(lat) {
    this.clickLat = lat;
  }

  setClickLng(lng) {
    this.clickLng = lng;
  }

  setClickDesc(desc) {
    this.clickDesc = desc;
  }

  setIncident(incident) {
    this.setIncident = incident;
  }

  addToMarkerList(marker) {
    this.markers.push(marker);
  }

  getMarkerList() {
    return this.markers;
  }
}
