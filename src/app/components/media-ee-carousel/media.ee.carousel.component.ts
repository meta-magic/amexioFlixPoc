import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
declare var $;
@Component({
 selector: 'media-ee-carousel',
 templateUrl: 'media.ee.carousel.html',
 styleUrls : ['media.ee.carousel.css']
})

export class MultiMediaCarousel implements OnInit,OnChanges {

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

  ngOnChanges(changes : SimpleChanges){
    if(changes['data']!=null){
      this.data = changes['data'].currentValue;
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
    this.data.forEach( (item)=>{
      item.selected = null;
    });
    $('#'+this.elementId+'carousel-detail-content').collapse('hide');
  }

  openDetailsSection(item : any) {
    this.videoUrl = item.video;
    this.currentDetailsImagePath = item.details_img;
    this.currentDetailsTitle = item.title;
    this.currentDetailsDesc = item.desc;
    this.currentContent = item.content;
    this.seasonNo = item.seasonNo;
    this.matchPercentage = item.matchPercentage;
    this.ageLimit = item.ageLimit;
    this.releaseYear = item.releaseYear;

    this.data.forEach( (item)=>{
      item.selected = null;
    });

    item.selected = "selected";
    $('#'+this.elementId+'carousel-detail-content').collapse('show');
    setTimeout(()=>{
      $('html, body').animate({
        scrollTop: $('#'+this.elementId+'carousel-detail-content').offset().top
      }, 500);
    },500)
  }


  loadVideo(item){
    this.router.navigate(['/player',item.video])
  }

  playVideo(video : any){
    this.router.navigate(['player',video]);
  }
}
