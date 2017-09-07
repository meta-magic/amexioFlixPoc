import {Component, Input, OnInit} from '@angular/core';
declare var $;
@Component({
 selector: 'media-ee-carousel',
 templateUrl: 'media.ee.carousel.html',
 styleUrls : ['media.ee.carousel.css']
})

export class MultiMediaCarousel implements OnInit {

  @Input()  data : any;
  elementId : any;
  right = false;
  left = false;
 constructor() {
   this.elementId = 'multi-media-ee-carousel-' + Math.floor(Math.random()*90000) + 10000;
 }

 ngOnInit() { }


  leftClick(){
    let ts = document.getElementById(this.elementId);
    $('#'+this.elementId).animate( { scrollLeft: '-=400' }, 600);
    if (ts.scrollLeft == 0 ) {
      document.getElementById(this.elementId+'leftarrow').style.visibility = 'hidden';
    }
    document.getElementById(this.elementId+'rightarrow').style.visibility = 'visible';
  }

  rightClick(){
    let ts = document.getElementById(this.elementId);
    $('#'+this.elementId).animate( { scrollLeft: '+=400' }, 600);
    if ((ts.scrollWidth - ts.offsetWidth - ts.scrollLeft ) <= 0) {
      document.getElementById(this.elementId+'rightarrow').style.visibility = 'hidden';
    }
    document.getElementById(this.elementId+'leftarrow').style.visibility = 'visible';
  }
}
