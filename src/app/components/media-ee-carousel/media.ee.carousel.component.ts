import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
declare var $;
@Component({
 selector: 'media-ee-carousel',
 templateUrl: 'media.ee.carousel.html',
 styleUrls : ['media.ee.carousel.css']
})

export class MultiMediaCarousel implements OnInit {

  @Input()  data : any;

  @Input()  carouselStyle : any;

  @Input()  hasDetail : boolean = true;

  @Input()  title : string;

  elementId : any;
  right = false;
  left = false;

  currentDetailsImagePath : any;
  currentDetailsTitle : any;
  currentDetailsDesc : any;
  currentContent : any;
  videoUrl : any;
  rate : any;
  seasonNo : any;
  releaseYear : any;
  ageLimit : any;
  matchPercentage : any;

  constructor(private router : Router) {
    this.elementId = 'multi-media-ee-carousel-' + Math.floor(Math.random()*90000) + 10000;
  }

  ngOnInit() {
    if(this.carouselStyle == null){
      this.carouselStyle = 'horizontal';
    }
  }


  leftClick(){
    let ts = document.getElementById(this.elementId);
    $('#'+this.elementId).animate( { scrollLeft: '-=350' }, 600);
    if (ts.scrollLeft == 0 ) {
      document.getElementById(this.elementId+'leftarrow').style.visibility = 'hidden';
    }
    document.getElementById(this.elementId+'rightarrow').style.visibility = 'visible';
  }

  rightClick(){
    let ts = document.getElementById(this.elementId);
    $('#'+this.elementId).animate( { scrollLeft: '+=350' }, 600);
    if ((ts.scrollWidth - ts.offsetWidth - ts.scrollLeft ) <= 0) {
      document.getElementById(this.elementId+'rightarrow').style.visibility = 'hidden';
    }
    document.getElementById(this.elementId+'leftarrow').style.visibility = 'visible';
  }


  closeDetailPage(){
    $('#'+this.elementId+'carousel-detail-content').collapse('hide');
  }

  openDetailsSection(item : any) {
    debugger;
    this.videoUrl = item.video;
    this.currentDetailsImagePath = item.details_img;
    this.currentDetailsTitle = item.title;
    this.currentDetailsDesc = item.desc;
    this.currentContent = item.content;
    this.seasonNo = item.seasonNo;
    this.matchPercentage = item.matchPercentage;
    this.ageLimit = item.ageLimit;
    this.releaseYear = item.releaseYear;

    item.selected = "selected";
    $('#'+this.elementId+'carousel-detail-content').collapse('show');
    setTimeout(()=>{
      $('html, body').animate({
        scrollTop: $('#'+this.elementId+'carousel-detail-content').offset().top
      }, 500);
    },500)
  }


  loadVideo(item){
    debugger;
    this.router.navigate(['/player',item.video])
  }

  onClick(){
    debugger;
  }
}
