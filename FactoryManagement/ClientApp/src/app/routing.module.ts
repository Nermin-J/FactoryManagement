import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ReportingComponent } from './reporting/reporting.component';
import { UsersComponent } from './users/users.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ], 
  exports:[ 
    RouterModule
  ]
})
export class RoutingModule { }
  