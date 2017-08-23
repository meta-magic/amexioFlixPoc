/**
 * Created by pratik on 23/8/17.
 */
import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var $;
@Component({
 selector: 'app-multi-item-carousel',
 templateUrl: 'multi.item.carousel.html',
  styles : [`

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

export class MultiItemCarousel implements OnInit,AfterViewInit {
 constructor() { }

 ngOnInit() { }

 ngAfterViewInit(){
   $('#recipeCarousel').carousel({
     interval: false
   })

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


}
