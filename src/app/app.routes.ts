/**
 * Created by pratik on 2/8/17.
 */
import { Routes } from '@angular/router';
import {PlayerComponent} from "./pages/player/content.video.player";


export const ROUTES: Routes = [
  {
  path: '', redirectTo: 'app', pathMatch: 'full'
  },
  {
    path: 'app',   loadChildren: './pages/landing-page/landing.page.module#LandingPageModule'
  },
  {
    path: 'player/:id' , component : PlayerComponent
  }
];
