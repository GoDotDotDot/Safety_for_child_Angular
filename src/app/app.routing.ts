import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SafetyChildStatusComponent} from "./safety-child-status.component";
import {Error404} from "./error404.component";

const appRoutes:Routes=[

  {
    path:'status',
    component:SafetyChildStatusComponent
  },
  {
    path:'**',
      component:Error404
  },
]
export const appRoutingProviders: any[] = [

];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
