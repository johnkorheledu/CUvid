import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { MarkerServiceService } from '../services/marker-service.service';
import { Marker } from '../marker';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
})
export class DialogOverviewExample {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  incidentForm = new FormGroup({
    incident: new FormControl(''),
    description: new FormControl(''),
    url: new FormControl(''),
  });

  lastLng;
  lastLat;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {},
    private markerService: MarkerServiceService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitMarker() {
    const marker: Marker = {
      id: Math.floor(Math.random() * (999999 - 100000)) + 100000,
      name: this.incidentForm.get('incident').value,
      description: this.incidentForm.get('description').value,
      lat: this.markerService.clickLat,
      lng: this.markerService.clickLng,
      url: this.incidentForm.get('url').value,
    };
    this.markerService
      .addMarker(marker)
      .subscribe((marker) => this.markerService.addToMarkerList(marker));
    this.dialogRef.close();
    this.lastLat = this.markerService.clickLat;
    this.lastLng = this.markerService.clickLng;
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
