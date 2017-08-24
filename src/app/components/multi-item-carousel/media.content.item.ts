/**
 * Created by pratik on 24/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
 selector: 'amexio-media-content',
 template: `   
   <div class="carosel-item" (mouseenter)="onHoverEnter()" (mouseleave)="onHoverLeave()">
    <img src="{{imgPath}}" />
   </div>
     
 `,
  styleUrls : ['carousel.style.css']
})

export class MediaContentItem implements OnInit {

  @Input() id : string;
  showText : boolean;

  @Input() imgPath : any;

  constructor() { }

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
