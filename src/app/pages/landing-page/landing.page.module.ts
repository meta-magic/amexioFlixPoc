/**
 * Created by pratik on 23/8/17.
 */

import { NgModule } from '@angular/core';

import { LandingPageComponent } from './landing.page.component';
import {AppNavBarComponent} from "../layout/page.nav.bar.component";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ComponentModule} from "../../components/components.module";
import {FormsModule} from "@angular/forms";
import {CommonHttpService} from "../../components/common.http.service";
import {HttpModule} from "@angular/http";

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  {path : '' , component : LandingPageComponent}
];


@NgModule({
 imports: [CommonModule, FormsModule, HttpModule, RouterModule.forChild(routes),ComponentModule],
 exports: [],
 declarations: [LandingPageComponent,AppNavBarComponent],
 providers: [CommonHttpService],
})
export class LandingPageModule {

}

