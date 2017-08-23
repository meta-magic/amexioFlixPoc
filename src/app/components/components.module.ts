/**
 * Created by pratik on 23/8/17.
 */
import { NgModule } from '@angular/core';
import {DeferredLoader} from "./defer/defer.page";
import {CommonModule} from "@angular/common";
import {MultiItemCarousel} from "./multi-item-carousel/multi.item.carousel.component";

const COMPONENTS = [
  DeferredLoader,
  MultiItemCarousel
];

@NgModule({
 imports: [CommonModule],
 exports: COMPONENTS,
 declarations: COMPONENTS,
 providers: [],
})
export class ComponentModule { }
