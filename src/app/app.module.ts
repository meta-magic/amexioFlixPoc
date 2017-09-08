import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {PlayerComponent} from "./pages/player/content.video.player";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppSharedService} from "./shared.app.service";
import {AmexioMediaModule} from 'amexio-ng-extensions/enterprise/media';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AmexioMediaModule
  ],
  providers: [AppSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
