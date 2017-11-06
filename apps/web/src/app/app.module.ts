import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { UiModule } from '../../../../libs/ui';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'angular-nx-ssr' }),
    NxModule.forRoot(),
    UiModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
