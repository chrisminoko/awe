import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidenavComponent} from './sidenav/sidenav.component'
import{MaincontentComponent} from './maincontent/maincontent.component';
import{CountriesComponent} from './countries/countries.component'



const routes: Routes = [
  {path : 'maincontent', component:MaincontentComponent},
  {path : '', redirectTo:'/maincontent',pathMatch:'full'},
  {path : 'countries/:sportId', component:CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
