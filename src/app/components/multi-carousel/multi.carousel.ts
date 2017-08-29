/**
 * Created by pratik on 29/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';
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

  `]
})

export class AmexioMultiMediaCarouselComponent implements OnInit {
  elementId : any;

  @Input()  data : any;

  @Input()  title : any;

  constructor() {

  }

  ngOnInit() {
    this.elementId = 'media-item-carousel-' + Math.floor(Math.random()*90000) + 10000;
  }

  ngAfterViewInit(){
    $('#'+this.elementId).carousel({
      interval: false
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
}
