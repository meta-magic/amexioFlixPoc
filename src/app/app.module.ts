import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {PlayerComponent} from "./pages/player/content.video.player";
import {SharedModule} from "./shared.module";
import {AmexioYoutubePlayerComponent} from "./components/video-player/youtube.player.component";
import {ComponentModule} from "./components/components.module";

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    ComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
