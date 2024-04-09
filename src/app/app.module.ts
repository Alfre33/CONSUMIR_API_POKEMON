import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonesJAGFComponent } from './digimones-jagf/digimones-jagf.component';
import { HttpClientModule } from '@angular/common/http';
import { DigimonesServices } from './digimones-jagf/digimones.service';

@NgModule({
  declarations: [
    AppComponent,
    DigimonesJAGFComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DigimonesServices, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
