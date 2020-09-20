import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { DemoMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {DialogOverviewExample, DialogOverviewExampleDialog} from './components/dialog-overview-example';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUWS2GpVtXAnI_W67KUVUzdOBaEJX0Vt4'
    })
  ],
  exports: [
    AgmCoreModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  entryComponents: [DialogOverviewExampleDialog, DialogOverviewExample],
  bootstrap: [AppComponent]
})
export class AppModule { }
