/**
 * Created by pratik on 4/9/17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

declare var $;
const LARGE_SCREEN_MAX_ITEM = 5;

@Component({
  moduleId: module.id,
  selector: 'amexio-ee-carousel',
  templateUrl: 'amexio-carousel-x.component.html',
  styleUrls : ['amexio.carousel.style.css'],
  /*animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in')
      ]),
      transition('* => void', [
        animate('200ms ease-out', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]*/
  /*animations : [
    state('previous',style({
      //transition l2r
    })),
    state('next',style({
      //transition r2l
    })),
    transition('previous => next',
    [
      //animate here
    ]),
    transition('next => previous',[
      //animate here
    ])
  ]*/
})

export class AmexioCarouselXComponent implements OnInit {

  @Input()   data : any;

  @Input()   cClass : any;

  @Input() title : string;

  @Input() hasDetail : boolean = true;

  elementId : any;

  items : Array<any>;

  loopIndex : any;

  carouselItemSet : Array<any> = [];

  renderedDeviceHeight : number;

  renderedDeviceWidth : number;

  viewDataArray : any[] = [];

  animationClass : any;

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
    this.cClass = 'horizontal-carousel';
    this.elementId = 'multi-item-carousel-' + Math.floor(Math.random()*90000) + 10000;
  }

  ngOnInit() {
    this.loopIndex = 0;
    if(this.data != null && this.data.length > 0)
      this.makeCarouselItemSet();
  }

  resizeCarousel(){
    this.loopIndex = 0;
    this.makeCarouselItemSet();
  }

  /**
   * Get device Width & Height
   */
  getDeviceSpecs(){
    this.renderedDeviceHeight = window.screen.height;
    this.renderedDeviceWidth = window.screen.width;
  }

  /**
   * Render data based on Device Size
   */
  makeCarouselItemSet(){
    this.carouselItemSet = [];
    if(this.isDeviceMobile()){    //If mobile, Display single Data only
      this.data.forEach( (item)=>{
        this.carouselItemSet.push(item);
      });
    }
    else{     //Group set of data into LARGE_SCREEN_MAX_ITEM
      let itemSetLength = this.data.length;
      if(itemSetLength % LARGE_SCREEN_MAX_ITEM  == 0){  //chop chop
        let objectChopped = itemSetLength / LARGE_SCREEN_MAX_ITEM;
        let choppedSingleData = [];
        let beginChopIndex = 0;
        let currentItemsToChop = LARGE_SCREEN_MAX_ITEM;
        for(let i =0 ;i < objectChopped;i++){
          for(let i = beginChopIndex; i < currentItemsToChop;i++){
            choppedSingleData.push(this.data[i]);
          }
          this.carouselItemSet.push(choppedSingleData);
          choppedSingleData = [];
          beginChopIndex = beginChopIndex + LARGE_SCREEN_MAX_ITEM;
          currentItemsToChop = currentItemsToChop + LARGE_SCREEN_MAX_ITEM;
        }
      }
      else{
        let lengthOfData = this.data.length;
        let itemDifference = lengthOfData % LARGE_SCREEN_MAX_ITEM;

        if(itemDifference + LARGE_SCREEN_MAX_ITEM != lengthOfData){  //case where data is greater than chop size
          let numberOfChoppedItem = Math.round(lengthOfData / LARGE_SCREEN_MAX_ITEM) + 1;   //round off to nearest non decimal
          let numberOfItemsToFill = (numberOfChoppedItem * LARGE_SCREEN_MAX_ITEM) - this.data.length;

          let uniqueSetLength = this.data.length - itemDifference;
          let choppedSingleData = [];
          let beginChopIndex = 0;
          let currentItemsToChop = LARGE_SCREEN_MAX_ITEM;
          for(let i =0 ;i < numberOfChoppedItem;i++){
            if( i != numberOfChoppedItem - 1){
              for(let i = beginChopIndex; i < currentItemsToChop;i++){
                choppedSingleData.push(this.data[i]);
              }
            }
            else{
              choppedSingleData.push(this.data[this.data.length-1]);
              for(let i = 0; i < numberOfItemsToFill; i++){
                choppedSingleData.push(this.data[i]);
              }
            }

            this.carouselItemSet.push(choppedSingleData);
            choppedSingleData = [];
            beginChopIndex = beginChopIndex + LARGE_SCREEN_MAX_ITEM;
            currentItemsToChop = currentItemsToChop + LARGE_SCREEN_MAX_ITEM;
          }
        }
      }
    }

    //Finally Display data to view with current items on screen
    this.viewDataArray = [];
    this.viewDataArray.push(this.getcurrentItemSet());
  }

  isDeviceMobile() : boolean{
    this.getDeviceSpecs();
    if(this.renderedDeviceWidth < 600)
      return true;
    else
      return false;
  }

  previousItemSet(){
    this.animationClass = '';
    this.animationClass = 'amexio-right-slide';
    this.viewDataArray = [];
    this.viewDataArray.push(this.getPreviousItemSet());
  }

  nextItemSet(){
    this.viewDataArray = [];
    this.animationClass = 'amexio-left-slide';
    this.viewDataArray.push(this.getNextItemSet());
  }

  /**
   * get the current set of items on view
   * @returns {any}
   */
  getcurrentItemSet() : Array<any>{
    if(this.loopIndex < 0){
      this.loopIndex = this.carouselItemSet.length - 1;
    }
    if( this.loopIndex >= this.carouselItemSet.length){
      this.loopIndex = 0;
    }
    return this.carouselItemSet[this.loopIndex];
  }

  /**
   * Get the Previous Set of items of current
   * iteration
   * @returns {Array<any>}
   */
  getPreviousItemSet() : Array<any>{
    this.loopIndex--;
    return this.getcurrentItemSet();
  }

  /**
   * Get the Next Set of items of current
   * iteration
   * @returns {Array<any>}
   */
  getNextItemSet() : Array<any>{
    this.loopIndex++;
    return this.getcurrentItemSet();
  }


  closeDetailPage(){
    for(let i=0; i<this.viewDataArray.length;i++){
      for
      (let j=0; j<this.viewDataArray[i].length;j++){
        delete this.viewDataArray[i][j].selected;
      }

    }

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

    for(let i=0; i<this.viewDataArray.length;i++){
      for
      (let j=0; j<this.viewDataArray[i].length;j++){
        delete this.viewDataArray[i][j].selected;
      }

    }

    item.selected = "selected";

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
