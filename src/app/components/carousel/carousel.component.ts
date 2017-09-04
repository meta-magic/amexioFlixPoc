/**
 * Created by ketangote on 9/1/17.
 */


/**
 * Created by pratik on 29/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'amexio-carousel',
  templateUrl : 'carousel.html',
  styleUrls : ['carousel.css']
})

export class AmexioCarouselComponent implements OnInit {

  elementId : any;

  @Input()  data : any;

  @Input() title : string;

  @Input() size : string;

  navigationClass : string;

  constructor(private router : Router) {
    this.size = "crasouelinner-potrait";
    this.navigationClass = "crasouelpane-scroller-potrait";
  }

  ngOnInit() {
    this.elementId = 'amexio-carousel-' + Math.floor(Math.random()*90000) + 10000;
  }

  ngAfterViewInit(){
      if(this.size === "potrait"){
      this.navigationClass = "crasouelpane-scroller-potrait";
    }else if(this.size == "landscape"){
      this.navigationClass = "crasouelpane-scroller-landscape";
    }
  }

  leftClick(){
    var ts = document.getElementById(this.elementId+"-crasouelpane-wrapper");
    ts.scrollLeft -= 400;
    if (ts.scrollLeft == 0 ) {
      document.getElementById(this.elementId+"-crasouelpane-scroller-left-inner").style.visibility = 'hidden';

    }
    document.getElementById(this.elementId+"-crasouelpane-scroller-right-inner").style.visibility = 'visible';

  }

  rightClick(){
    var ts = document.getElementById(this.elementId+"-crasouelpane-wrapper");
    ts.scrollLeft += 400;
    if ((ts.scrollWidth - ts.offsetWidth - ts.scrollLeft ) <= 0) {
      document.getElementById(this.elementId+"-crasouelpane-scroller-right-inner").style.visibility = 'hidden';
    }
    document.getElementById(this.elementId+"-crasouelpane-scroller-left-inner").style.visibility = 'visible';
  }


  zoomIn(index){
    var ts = document.getElementById(this.elementId+'-'+index+'-crasouelinner');
    debugger;
    ts.style.width = (ts.offsetWidth+150) +"px";
  }

  zoomOut(index){
    var ts = document.getElementById(this.elementId+'-'+index+'-crasouelinner');
    debugger;
    ts.style.width = (ts.offsetWidth-150) +"px";
  }
}
