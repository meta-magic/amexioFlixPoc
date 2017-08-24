/**
 * Created by pratik on 23/8/17.
 */
import {AfterContentInit, AfterViewInit, Component, OnInit, Input} from '@angular/core';

declare var $;
@Component({
 selector: 'amexio-multi-item-carousel',
 templateUrl: 'multi.item.carousel.html',
  styleUrls : ['carousel.style.css']
})

export class MultiItemCarousel implements OnInit,AfterViewInit,AfterContentInit {


    @Input()  data : any;

    elementId : any;

    constructor() {
      this.elementId = 'multi-item-carousel-' + Math.floor(Math.random()*90000) + 10000;
    }

    ngOnInit() { }

    ngAfterViewInit(){}

    ngAfterContentInit() {

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
}

