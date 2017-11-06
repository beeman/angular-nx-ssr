import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module'

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule],
  declarations: [HomeComponent, AboutComponent, ContactComponent]
})
export class PagesModule {}
