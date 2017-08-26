/**
 * Created by pratik on 24/8/17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarouselEventService} from "./carousel.event.service";

@Component({
 selector: 'amexio-media-content',
 template: `   
   <div class="carosel-item img__wrap" (mouseenter)="onHoverEnter()" (mouseleave)="onHoverLeave()">
    <img src="{{imgPath}}" class="img__img" />
     <div class="img__description_layer">
       <h6 class="img__description" style="color: white">
         <p  style="justify-content: center;cursor: pointer;"><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></p>
         <p>{{title}}</p>
         <p style="cursor: pointer;"><i class="fa fa-chevron-down fa-2x" aria-hidden="true" (click)="openDetailsSection()"></i></p>
       </h6>
     </div>
   </div>
 `,
  styleUrls : ['carousel.style.css']
})

export class MediaContentItem implements OnInit {

  parentId : string;

  @Output() onCardClick : any = new EventEmitter<any>();

  showText : boolean;

  elementId : any;

  @Input() imgPath : any;

  @Input() title;



  constructor(private carouselService : CarouselEventService) {
    this.elementId = 'media-content-item-' + Math.floor(Math.random()*90000) + 10000;
  }

  openDetailsSection() {
    this.carouselService.open(this.parentId);
  }

  ngOnInit() {
  }

  onHoverEnter(){
    this.showText = true;
  }

  onHoverLeave(){
    this.showText = false;
  }


}
