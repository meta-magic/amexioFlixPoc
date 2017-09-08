/**
 * Created by pratik on 23/8/17.
 */

import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing.page.component';
import {AppNavBarComponent} from "../layout/page.nav.bar.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AmexioWidgetModule, CommonHttpService} from "amexio-ng-extensions";
import {AmexioMediaModule} from "amexio-ng-extensions/enterprise/media";

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  {path : '' , component : LandingPageComponent}
];


@NgModule({
 imports: [CommonModule, FormsModule, HttpModule, RouterModule.forChild(routes), AmexioWidgetModule,
   AmexioMediaModule],
 exports: [],
 declarations: [LandingPageComponent,AppNavBarComponent],
 providers: [CommonHttpService],
})
export class LandingPageModule {

}

