import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@angular-nx-ssr/pages/src/home/home.component'
import { AboutComponent } from '@angular-nx-ssr/pages/src/about/about.component'
import { ContactComponent } from '@angular-nx-ssr/pages/src/contact/contact.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
