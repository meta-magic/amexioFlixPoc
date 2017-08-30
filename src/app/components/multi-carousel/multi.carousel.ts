/**
 * Created by pratik on 29/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
declare var $;
@Component({
  selector: 'amexio-ee-multi-carousel',
  templateUrl : 'multi.carousel.html',
  styles: [`    
    .carousel-inner .carousel-item-right.active,
    .carousel-inner .carousel-item-next {
      transform: translateX(33.33%);
    }

    .carousel-inner .carousel-item-left.active,
    .carousel-inner .carousel-item-prev {
      transform: translateX(-33.33%)
    }

    .carousel-inner .carousel-item-right,
    .carousel-inner .carousel-item-left{
      transform: translateX(0);
    }
    
    
    .hover-in{
      transition: 1s ease;
    }
    .showContent{
      display: none;
    }
    .hover-in:hover .showContent{
      display: block;
    }
    
    .hover-in:hover{
      -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
      transform: scale(1.1);
      transition: 1s ease;
    }

  `]
})

export class AmexioMultiMediaCarouselComponent implements OnInit {
  elementId : any;

  @Input()  data : any;

  @Input()  title : any;

  @Input()  height : any;

  @Input()  width : any;

  hoverClass : string;

  text : string;

  hasDetail : boolean = true;
  ratingData : any[] = [1,2,3,4,5,6,7,8,9,10];
  public max = 5;
  public rate = 4;

  videoUrl : string;

  currentDetailsImagePath : string;

  currentDetailsTitle : string;

  currentDetailsDesc : string;

  currentContent : string;

  ageLimit: any;

  releaseYear: any;

  seasonNo: number;

  matchPercentage: any;

  constructor(private router : Router) {

  }

  ngOnInit() {
    this.elementId = 'media-item-carousel-' + Math.floor(Math.random()*90000) + 10000;
  }

  ngAfterViewInit(){
    $('#'+this.elementId).carousel({
      interval: false,
      slide : false,
      pause : false
    });

    $('.carousel .carousel-item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
      }
      else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
      }
    });

  }

  onPrevious(){
    $('#'+this.elementId).carousel('prev');
  }

  onNext(){
    $('#'+this.elementId).carousel('next');
  }

  onHoverEnter(){

  }
  onHoverLeave(){
    this.hoverClass = '';
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

    $('#'+this.elementId+'carousel-detail-content').collapse('show');
    setTimeout(()=>{
      $('html, body').animate({
        scrollTop: $('#'+this.elementId+'carousel-detail-content').offset().top
      }, 500);
    },500)
  }

  closeDetailPage(){
    $('#'+this.elementId+'carousel-detail-content').collapse('hide');
    $('html, body').animate({
      scrollTop: $('#'+this.elementId).offset().top
    }, 500);
  }

  loadVideo(item : any){
    this.router.navigate(['/player',item.video])
  }

  playVideo(video : any){
    this.router.navigate(['player',video]);
  }

}
