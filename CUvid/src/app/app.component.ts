import { Component, NgModule, NgZone, OnInit } from '@angular/core';
import { AgmCoreModule, AgmZoomControl, MarkerManager } from '@agm/core';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Marker } from '../app/marker';
import { MarkerServiceService } from './services/marker-service.service';
import { DialogOverviewExampleDialog } from './components/dialog-overview-example';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private cdRef: ChangeDetectorRef,
    private matDialog: MatDialog,
    private zone: NgZone,
    private markerService: MarkerServiceService
  ) {}

  @NgModule({
    imports: [AgmCoreModule],
  })
  title = 'CUvid';
  lat = 40.007667;
  lng = -105.265963;
  zoom = 16;
  icon = '../assets/ldpi.png';

  openDialog(): void {
    const dialogRef = this.matDialog.open(DialogOverviewExampleDialog, {
      width: '30%',
      data: {},
    });
  }

  imgError(image) {
    image.parentNode.parentNode.style.display = 'none';
  }

  ngOnInit() {
    this.getData();
  }

  public allMarkers: Marker[] = [];

  public getData() {
    this.markerService.getMarkers().subscribe(
      (data: Marker[]) => {
        this.allMarkers = data;
      },
      (error) => {
        console.log('Error while validating token');
      },
      () => {
        console.log(this.allMarkers);
      }
    );
  }

  mainCampus() {
    this.lat = 40.007667;
    this.lng = -105.265963;
    this.zoom = this.zoom;
  }

  trackByFn(index, marker) {
    return index;
  }

  public onMapReady(map) {
    map.addListener('click', (e) => {
      this.allMarkers.push({
        id: this.allMarkers.slice(-1)[0].id + 1,
        name: '',
        description: '',
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        url: '',
      });
      console.log(this.allMarkers);
      this.markerService.setClickLat(e.latLng.lat());
      this.markerService.setClickLng(e.latLng.lng());
      this.cdRef.detectChanges();
      this.zone.run(() => {
        const dialog = this.matDialog.open(DialogOverviewExampleDialog, {
          width: '30%',
        });
        dialog.afterClosed().subscribe(() => {
          this.allMarkers.pop();
          this.cdRef.detectChanges();
          this.markerService.markers = this.allMarkers;
        });
      });
    });
  }

  williamsVillage() {
    this.lat = 39.998877;
    this.lng = -105.250336;
    console.log(this.zoom);
    this.zoom = this.zoom;
  }

  styles = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#212121',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9e9e9e',
        },
      ],
    },
    {
      featureType: 'administrative.land_parcel',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#bdbdbd',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#181818',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#1b1b1b',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#2c2c2c',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#8a8a8a',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          color: '#373737',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#3c3c3c',
        },
      ],
    },
    {
      featureType: 'road.highway.controlled_access',
      elementType: 'geometry',
      stylers: [
        {
          color: '#4e4e4e',
        },
      ],
    },
    {
      featureType: 'road.local',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#616161',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#757575',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#000000',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#3d3d3d',
        },
      ],
    },
  ];

  countryRestriction = {
    latLngBounds: {
      east: -105.205595,
      north: 40.089556,
      south: 39.963071,
      west: -105.29612,
    },
    strictBounds: true,
  };
}
