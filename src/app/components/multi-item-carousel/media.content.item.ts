/**
 * Created by pratik on 24/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
 selector: 'amexio-media-content',
 template: `   
   <div class="carosel-item" (mouseenter)="onHoverEnter()" (mouseleave)="onHoverLeave()">
    <img src="http://via.placeholder.com/350x150/bbbbbb/fff&amp;text={{id+1}}" />
     <h6 hidden="null">Dummy Information</h6>
   </div>
     
 `,
  styleUrls : ['carousel.style.css']
})

export class MediaContentItem implements OnInit {

  @Input() id : string;
  showText : boolean;

  constructor() { }

  ngOnInit() { }

  onHoverEnter(){
    this.showText = true;
  }

  onHoverLeave(){
    this.showText = false;
  }


}
