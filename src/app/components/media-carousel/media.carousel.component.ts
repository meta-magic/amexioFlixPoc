/*
 * Copyright 2016-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Author -  Pratik Kelwalkar
 *
 */
import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
declare var $;
@Component({
  moduleId: module.id,
  selector: 'amexio-media-ee-carousel-ex',
  templateUrl: 'media.carousel.component.html',
  styleUrls : ['media.carousel.style.css']
})

export class MediaCarouselComponent implements OnInit,AfterViewInit {

  @Input()    mediaWidth : number;

  @Input()    mediaHeight : number;

  @Input()    carouselStyle : string;     //vertical | horizontal

  @Input()    data : any;

  @Input()    hasDetail : boolean = true;

  @Input()    title : any;

  elementId : any;

  itemsToDisplay : number;
  masterTub : any[] = [];
  masterTubLoopIndex : number;

  currentActiveViewBucket : any[];

  //**Item Data Binded To content Section
  videoUrl : any;
  currentDetailsImagePath : any;
  currentDetailsTitle : any;
  currentDetailsDesc : any;
  currentContent : any;
  seasonNo : any;
  matchPercentage : any;
  ageLimit : any;
  releaseYear : any;


  constructor(private router : Router) {
    this.elementId = 'multi-media-ee-carousel-' + Math.floor(Math.random()*90000) + 10000;
  }

  ngOnInit() {
    this.calcualteItemsToDisplay();
  }

  ngAfterViewInit(){

  }

  /**
   * Calculate Items to display on screen
   */
  calcualteItemsToDisplay(){
    this.masterTubLoopIndex = 0;
    if(window.innerWidth > this.mediaWidth){
      this.itemsToDisplay = parseInt((window.innerWidth / this.mediaWidth).toFixed(0));
      console.log('Items -->'+this.itemsToDisplay);
      this.createIndividualBuckets();
    }
    else{
      //should display a single item only
      this.data.forEach( (item)=>{
        this.masterTub.push([item]);
      });
    }
  }

  createIndividualBuckets(){
    debugger;
    let individualBucket : any[] = [];
    this.masterTub = [];
    this.currentActiveViewBucket = [];
    let bucketLoopBeginIndex = 0;
    let noOfBuckets = this.data.length / this.itemsToDisplay;
    let currentBucketSize = this.itemsToDisplay;
    if(this.data.length % this.itemsToDisplay == 0){      //Distribute each media Equally into each bucket
      for(let i = 0; i < noOfBuckets; i++){
        for(let j =bucketLoopBeginIndex; j < currentBucketSize; j++){
          individualBucket.push(this.data[j]);
        }
        this.masterTub.push(individualBucket);
        individualBucket = [];
        currentBucketSize = currentBucketSize + this.itemsToDisplay;
        bucketLoopBeginIndex = bucketLoopBeginIndex + this.itemsToDisplay;

      }
      this.currentActiveViewBucket.push(this.getCurrentBucket());
    }
  }

  /**
   * Re Calculate the itemsToDisplay based on
   * new screen dimensions.
   */
  resizeComponent(){
    this.resetPreviousBucket();
    this.calcualteItemsToDisplay();
  }

  resetPreviousBucket(){
    this.masterTubLoopIndex = 0;
    this.itemsToDisplay = 0;
    this.masterTub = [];
    this.currentActiveViewBucket = [];
  }


  //----------------Master Tub Operation---------------

  /**
   * Get the current Bucket for View
   * @returns {any}
   */
  getCurrentBucket() : Array<any>{
    if(this.masterTubLoopIndex < 0){
      this.masterTubLoopIndex = this.masterTub.length - 1;
    }
    if( this.masterTubLoopIndex >= this.masterTub.length){
      this.masterTubLoopIndex = 0;
    }
    return this.masterTub[this.masterTubLoopIndex];
  }

  /**
   * Get the Previous Bucket of current
   * iteration
   * @returns {Array<any>}
   */
  getPreviousBucket() : Array<any>{
    this.masterTubLoopIndex--;
    return this.getCurrentBucket();
  }

  /**
   * Get the Next Set of items of current
   * iteration
   * @returns {Array<any>}
   */
  getNextBucket() : Array<any>{
    this.masterTubLoopIndex++;
    return this.getCurrentBucket();
  }

  //---------- Master Tub Operation END---------------


  //****** Details Section Methods *******//
  closeDetailPage(){
   /* for(let i=0; i<this.currentActiveViewBucket.length;i++){
      for
      (let j=0; j<this.currentActiveViewBucket[i].length;j++){
        delete this.currentActiveViewBucket[i][j].selected;
      }

    }*/
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

   /* for(let i=0; i<this.currentActiveViewBucket.length;i++){
      for
      (let j=0; j<this.currentActiveViewBucket[i].length;j++){
        delete this.currentActiveViewBucket[i][j].selected;
      }

    }*/

    item.selected = "selected";

    debugger;
    $('#'+this.elementId+'carousel-detail-content').collapse('show');
    setTimeout(()=>{
      $('html, body').animate({
        scrollTop: $('#'+this.elementId+'carousel-detail-content').offset().top
      }, 500);
    },500)
  }

  //******* Details Section ENDS  *******/


  previousItemSet(){
    // this.animationClass = '';
    // this.animationClass = 'amexio-right-slide';
    this.currentActiveViewBucket = [];
    this.currentActiveViewBucket.push(this.getPreviousBucket());
    console.log(this.currentActiveViewBucket);
  }

  nextItemSet(){
    this.currentActiveViewBucket = [];
    // this.animationClass = 'amexio-left-slide';
    this.currentActiveViewBucket.push(this.getNextBucket());
    console.log(this.currentActiveViewBucket);
  }


  loadVideo(item : any){
    this.router.navigate(['/player',item.video])
  }

  playVideo(video : any){
    this.router.navigate(['player',video]);
  }

  right = false;
  left = false;
  leftClick(){
  var ts = document.getElementById(this.elementId);
  ts.scrollLeft -= 400;
  if (ts.scrollLeft == 0 ) {
    document.getElementById(this.elementId+'leftarrow').style.visibility = 'hidden';
  }
  document.getElementById(this.elementId+'rightarrow').style.visibility = 'visible';
}

  rightClick(){
  var ts = document.getElementById(this.elementId);
  ts.scrollLeft += 400;
  if ((ts.scrollWidth - ts.offsetWidth - ts.scrollLeft ) <= 0) {
    document.getElementById(this.elementId+'rightarrow').style.visibility = 'hidden';
  }
  document.getElementById(this.elementId+'leftarrow').style.visibility = 'visible';
}



}
