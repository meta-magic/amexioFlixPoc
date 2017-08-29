/**
 * Created by pratik on 23/8/17.
 */
import {AfterContentInit, AfterViewInit, Component, OnInit, Input, ContentChildren} from '@angular/core';
import {CarouselEventService} from "./carousel.event.service";
import {MediaContentItem} from "./media.content.item";
import {Router} from "@angular/router";

declare var $;
@Component({
 selector: 'amexio-multi-item-carousel',
 templateUrl: 'multi.item.carousel.html',
  styleUrls : ['carousel.style.css']
})

export class MultiItemCarousel implements OnInit,AfterViewInit,AfterContentInit {


    @Input()  data : any;

    @Input() title : any;

    @Input() hasDetail : boolean = true;

    elementId : any;

    showText : boolean;

    currentDetailsImagePath : string;

    currentDetailsTitle : string;

    currentDetailsDesc : string;

    currentContent : string;

    ageLimit: any;

    releaseYear: any;

    seasonNo: number;

    matchPercentage: any;



    @ContentChildren(MediaContentItem) mediaItems : any;

    ratingData : any[] = [1,2,3,4,5,6,7,8,9,10];
    public max = 5;
    public rate = 4;

    videoUrl : string;


    constructor(private carouselEventService : CarouselEventService,private router : Router) {
      this.elementId = 'multi-item-carousel-' + Math.floor(Math.random()*90000) + 10000;
     /* this.carouselEventService.state$.subscribe(
        res=>{
          if(res['state'] && (this.elementId+'carousel-detail-content' == res['id'])){
            $('#'+this.elementId+'carousel-detail-content').collapse('show');
            setTimeout(()=>{
              $('html, body').animate({
                scrollTop: $('#'+this.elementId+'carousel-detail-content').offset().top
              }, 500);
            },500)
          }
          else if(!res['state'] && (this.elementId+'carousel-detail-content' == res['id'])) {
            $('#'+this.elementId+'carousel-detail-content').collapse('hide');
            $('html, body').animate({
              scrollTop: $('#'+this.elementId).offset().top
            }, 500);
          }
        }
      );*/
    }

    ngOnInit() {
      console.log(this.data);
    }

    ngAfterViewInit(){
      this.onNextClick();
      this.onPreviousClick();
      // $('#'+this.elementId+'carousel-detail-content').collapse();
    }

    ngAfterContentInit(){
      //Setting the child components  pointing to its parent Description div id
      /*let mdComp = this.mediaItems.toArray();
      mdComp.forEach( (component)=>{
        component.parentId = this.elementId+'carousel-detail-content';
      })*/
    }


    onPreviousClick(){
      $('#prev-'+this.elementId).click(function() {
        $(this).blur();
        $(this).parent().find('.carosel-item').last().insertBefore($(this).parent().find('.carosel-item').first());
      });
    }

    onNextClick(){
      $('#next-'+this.elementId).click(function() {
        $(this).blur();
        $(this).parent().find('.carosel-item').first().insertAfter($(this).parent().find('.carosel-item').last());
      });
    }

    closeDetailPage(){
      $('#'+this.elementId+'carousel-detail-content').collapse('hide');
      $('html, body').animate({
        scrollTop: $('#'+this.elementId).offset().top
      }, 500);
    }

    onHoverEnter(){
      this.showText = true;
    }

    onHoverLeave(){
      this.showText = false;
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

      $('#'+this.elementId+'carousel-detail-content').collapse('show');
      setTimeout(()=>{
        $('html, body').animate({
          scrollTop: $('#'+this.elementId+'carousel-detail-content').offset().top
        }, 500);
      },500)
    }

  loadVideo(item : any){
     this.router.navigate(['/player',item.video])
  }

  playVideo(video : any){
    this.router.navigate(['player',video]);
  }
}

