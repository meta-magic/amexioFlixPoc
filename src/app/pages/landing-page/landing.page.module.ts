/**
 * Created by pratik on 23/8/17.
 */

import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing.page.component';
import {AppNavBarComponent} from "../layout/page.nav.bar.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ComponentModule} from "../../components/components.module";

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  {path : '' , component : LandingPageComponent}
];


@NgModule({
 imports: [CommonModule,RouterModule.forChild(routes),ComponentModule],
 exports: [],
 declarations: [LandingPageComponent,AppNavBarComponent],
 providers: [],
})
export class LandingPageModule {

}

