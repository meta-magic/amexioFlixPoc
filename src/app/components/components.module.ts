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
import {ContentComponent} from './contents/content.component';
import {RatingInputComponent} from './ratinginput/ratinginput.component';
import {CommonHttpService} from './common.http.service';
import {DropDownComponent} from './dropdown/dropdown';
import {FormsModule} from '@angular/forms';
import {ListBoxComponent} from './listbox/listbox.component';
import {ButtonComponent} from "./button/button.component";
import {MediaContentItem} from "./multi-item-carousel/media.content.item";

const COMPONENTS = [
  DeferredLoader,
  MultiItemCarousel,  TabPaneComponent, TabComponent,
  CardComponent, PaneBodyComponent, PaneActionComponent, ContentComponent, RatingInputComponent,
  DropDownComponent, ListBoxComponent, ButtonComponent,MediaContentItem
];

@NgModule({
 imports: [CommonModule, FormsModule],
 exports: COMPONENTS,
 declarations: COMPONENTS,
 providers: [CommonHttpService],
})
export class ComponentModule { }
