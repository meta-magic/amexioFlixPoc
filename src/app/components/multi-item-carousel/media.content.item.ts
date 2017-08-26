/**
 * Created by pratik on 24/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
 selector: 'amexio-media-content',
 template: `   
   <div class="carosel-item img__wrap" (mouseenter)="onHoverEnter()" (mouseleave)="onHoverLeave()">
    <img src="{{imgPath}}" class="img__img" />
     <div class="img__description_layer">
       <h6 class="img__description" style="color: white">
         <p style="justify-content: center;"><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></p>
         <p>{{title}}</p>
       </h6>
     </div>
   </div>
     
 `,
  styleUrls : ['carousel.style.css']
})

export class MediaContentItem implements OnInit {

  @Input() id : string;

  @Input() title : string;

  showText : boolean;

  elementId : any;

  @Input() imgPath : any;

  constructor() {
    this.elementId = 'media-content-item-' + Math.floor(Math.random()*90000) + 10000;
  }

  ngOnInit() {
    console.log(this.imgPath);
  }

  onHoverEnter(){
    this.showText = true;
  }

  onHoverLeave(){
    this.showText = false;
  }


}
