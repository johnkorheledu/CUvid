import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {DemoMaterialModule} from './material-module';
import {FlexLayoutModule} from '@angular/flex-layout'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUWS2GpVtXAnI_W67KUVUzdOBaEJX0Vt4'
    })
  ],
  exports: [
    AgmCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
