import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { GoldTaskComponent } from './gold-task/gold-task.component';


@NgModule({
  declarations: [
    AppComponent,
    GoldTaskComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
