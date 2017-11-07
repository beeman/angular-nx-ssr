import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NxModule } from '@nrwl/nx';

import { UiModule } from '../../../../libs/ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment'

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'angular-nx-ssr' }),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    NxModule.forRoot(),
    UiModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
