/**
 * Created by pratik on 23/8/17.
 */
import { NgModule } from '@angular/core';
import {DeferredLoader} from './defer/defer.page';
import {CommonModule} from '@angular/common';
import {MultiItemCarousel} from './multi-item-carousel/multi.item.carousel.component';
import {PaneActionComponent} from './panes/paneaction.component';
import {PaneBodyComponent} from './panes/panebody.component';
import {CardComponent} from './panes/card.component';
import {TabPaneComponent} from './tabpane/tabpane.component';
import {TabComponent} from './tabpane/tabpill.component';

const COMPONENTS = [
  DeferredLoader,
  MultiItemCarousel,  TabPaneComponent, TabComponent,
  CardComponent, PaneBodyComponent, PaneActionComponent
];

@NgModule({
 imports: [CommonModule],
 exports: COMPONENTS,
 declarations: COMPONENTS,
 providers: [],
})
export class ComponentModule { }
