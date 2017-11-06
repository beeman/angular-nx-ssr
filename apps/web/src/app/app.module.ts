import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { UiModule } from '@angular-nx-ssr/ui';

@NgModule({
  imports: [AppRoutingModule, BrowserModule, NxModule.forRoot(), UiModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
