/**
 * Created by pratik on 4/9/17.
 */
import {Component, Input, OnInit} from '@angular/core';
const LARGE_SCREEN_MAX_ITEM = 5;
@Component({
  moduleId: module.id,
  selector: 'amexio-ee-carousel',
  templateUrl: 'amexio-carousel-x.component.html',
  styleUrls : ['amexio.carousel.style.css']
})

export class AmexioCarouselXComponent implements OnInit {

  items : Array<any>;
  loopIndex : any;

  carouselItemSet : Array<any> = [];

  @Input()   data : any;

  renderedDeviceHeight : number;

  renderedDeviceWidth : number;

  viewDataArray : any[] = [];

  animationClass : any;

  constructor() {
  }

  ngOnInit() {
    this.loopIndex = 0;
    this.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; // demo purpose
    this.data = this.items;
    if(this.data != null && this.data.length > 0)
      this.makeCarouselItemSet();

    console.log(this.data);
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
    if(this.isDeviceMobile()){    //If mobile, Display single Data only
      this.data.forEach( (item)=>{
        this.carouselItemSet.push(item);
      })
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
        //Chop the items in a recusrive way
      }
    }

    //Finally Display data to view with current items on screen
    this.viewDataArray.length == 0 ? this.viewDataArray.push(this.getcurrentItemSet()) : ()=>{
      this.viewDataArray = [];
      this.viewDataArray.push(this.getcurrentItemSet());
    };
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
    console.log(this.viewDataArray);
  }

  nextItemSet(){
    this.viewDataArray = [];
    this.animationClass = 'amexio-left-slide';
    this.viewDataArray.push(this.getNextItemSet());
    console.log(this.viewDataArray);
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

}
