import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SafetyChildStatusComponent} from "./safety-child-status.component";

const appRoutes:Routes=[
  {
    path:'',
    component:SafetyChildStatusComponent
  },
  {
    path:'**',
    component:SafetyChildStatusComponent
  },
]
export const appRoutingProviders: any[] = [

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
