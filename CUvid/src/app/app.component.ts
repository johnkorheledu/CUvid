import { Component, NgModule, NgZone, OnInit } from '@angular/core';
import { AgmCoreModule, AgmZoomControl, MarkerManager } from '@agm/core';
import { ChangeDetectorRef } from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import {Marker} from '../app/marker'
import {MarkerServiceService} from './services/marker-service.service'
import { DialogOverviewExampleDialog } from './components/dialog-overview-example';



class Markers {
  latitude: number
  longitude: number
  constructor(lat, lng) {
    this.latitude = lat;
    this.longitude = lng;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  constructor(private cdRef: ChangeDetectorRef, private matDialog: MatDialog, private zone: NgZone, private markerService: MarkerServiceService) { }



  @NgModule({
    imports: [
      AgmCoreModule
    ]
  })




  title = 'CUvid';
  lat = 40.007667;
  lng = -105.265963;
  zoom = 16;


  // _markers: Observable<any[]>;


  openDialog(): void {
    const dialogRef = this.matDialog.open(DialogOverviewExampleDialog, {
      width: '30%',
      data: {}
    });
  }

  ngOnInit() {
    this.getData()
  }

  public allMarkers: Marker[] = [];

  public getData() {
   this.markerService.getMarkers().subscribe((data: Marker[]) => {
     this.allMarkers = data
    },error => {
      console.log("Error while validating token");
  
    },
    () => {
      console.log(this.allMarkers)
    })
  }



  mainCampus() {
    this.lat = 40.007667;
    this.lng = -105.265963;
    this.zoom = this.zoom
  }


  public onMapReady(map) {
    map.addListener('click', (e) => {
      this.allMarkers.push({
        id: this.allMarkers.slice(-1)[0].id+1,
        name: '',
        description: '',
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      })
      this.cdRef.detectChanges()
      this.zone.run(() => {
        const dialog = this.matDialog.open(DialogOverviewExampleDialog, {
          width: '30%'
        })
        dialog.afterClosed().subscribe(() => {
          this.allMarkers.pop()
          this.cdRef.detectChanges()
        });
      });
    });
  }

  removeMarker() {
    this.allMarkers.pop()
    this.cdRef.detectChanges()
  }

  williamsVillage() {
    this.lat = 39.998877;
    this.lng = -105.250336;
    console.log(this.zoom)
    this.zoom = this.zoom
  }

  submitForm() {
    this.allMarkers.push(this.allMarkers[(this.allMarkers).length - 1])
    this.cdRef.detectChanges()
  }

  styles =
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ]


  countryRestriction = {
    latLngBounds: {
      east: -105.205595,
      north: 40.089556,
      south: 39.963071,
      west: -105.296120,
    },
    strictBounds: true
  }
}
