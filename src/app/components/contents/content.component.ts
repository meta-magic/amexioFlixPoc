/**
 * Created by dattaram on 23/8/17.
 */
import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
declare var $;
@Component({
  selector: 'amexio-content',
  template: `

    <div class="maincontent"  [ngStyle]="{'background-image':'url('+bgImgUrl+')'}">
    
      <div>
        <div class="col-lg-6 col-sm-12" style="color: white;">
          <h3 *ngIf="title">{{title}}</h3>
          <span style="display: inline">
            <li style="display: inline;color: lightgreen">{{matchPercentage}} Match</li>
            <li style="display: inline">{{releaseYear}}</li>
            <li style="display: inline;border: 1px solid gray">{{ageLimit}}+</li>
            <li style="display: inline">{{seasonNo}} Season</li>
          </span>
          <span *ngIf="description"><p>{{description}}</p></span>
          <ng-container *ngIf="contents">
              <span>
            <li *ngFor="let data of contents"><b>{{data.key}}</b> : {{data.value}}</li>
          </span>
          </ng-container>
          <table>
            <tr>
              <td *ngIf="enableWatch">
                <amexio-btn [label]="'Watch'" [type]="'danger'" [icon]="'fa fa-play'" [tooltipMessage]="'watch'" [size]="size" (onClick)="playVideo()"></amexio-btn>
              </td>
              <td *ngIf="enableMyList" >
                  <amexio-btn [label]="'MY LIST'" [icon]="'fa fa-plus'" [type]="'secondary'" [tooltipMessage]="'My List'" [size]="size" (onClick)="addToList()"></amexio-btn>
              </td>
              <td *ngIf="rate && max">
                <amexio-rating-input [(ngModel)]="rate"
                                     [max]="max" name="rate"
                                     [readonly]="isReadonly">
                </amexio-rating-input>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
   
  `,
  styles:[
    `
      .maincontent {
        position: relative;
        width: 100%; /* for IE 6 */
        height: 80vh;
        width: 100%;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      .maincontent div {
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
      }

      @media screen and (min-width: 1400px){
        .maincontent div {
          height: 32vw;
          padding-bottom: 20px;
        }
      }

      @media (max-width: 799px)
      {
        .maincontent div {
          font-size: 11px;
        }
         
        .maincontent div {
          top: 10px;
          width: 33vw;
          min-width: 330px;
          color: #999;
          line-height: 1.3;
        }

        .maincontent div table {
         height: 50px;
        }
      }

      @media(max-width: 480px) {
        h3 {
          font-size: 9pt;
        }
        span{
          font-size: 6pt;
        }
        li b{
          font-size: 6pt;
        }
        li {
          font-size: 6pt;
        }
        .maincontent {
          position: relative;
          width: 100%; /* for IE 6 */
          height: 30vh;
          width: 100%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
      }
     
    `
  ]
})

export class ContentComponent implements OnInit,OnChanges {

  @Input() bgImgUrl: any;

  @Input() bgMobileImgUrl: any;

  @Input() title: string;

  @Input() description: string;

  @Input() contents: any;

  @Input() videoLink: any;

  @Input() rate: any;

  @Input() max: any;

  @Input() isReadonly: boolean;

  @Input() enableWatch: boolean = false;

  @Input() enableMyList: boolean = false;

  @Input() ageLimit: any;

  @Input() releaseYear: any;

  @Input() seasonNo: number;

  @Input() matchPercentage: any;

  @Output() onWatchClick: EventEmitter<any>= new EventEmitter<any>();

  @Output() onAddListClick: EventEmitter<any>= new EventEmitter<any>();

  size : string;
  bgImageClass: any;

  overviewData: any;

  isMobileView : boolean;

  constructor() {
    console.log($(window).width());
    if($(window).width() < 500)
      this.size = 'small';
    else
      this.size = 'default';
  }

  ngOnInit() {
    this.onResize();
  }

  ngAfterViewInit(){

  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.videoLink && !changes.videoLink.isFirstChange()){
      this.videoLink = changes.videoLink.currentValue;
      console.log(this.videoLink);
    }
  }

  playVideo() {
   this.onWatchClick.emit(this.videoLink);
  }
  addToList() {
    this.overviewData = {
      'title': this.title,
      'description': this.description,
      'Video Link': this.videoLink,
      'rate': this.rate
    };
  this.onAddListClick.emit(this.overviewData);
  }
  onResize() {
    if (window.innerWidth < 995) {
      this.size = "small";
      this.bgImageClass = {
        //'background-image': 'url(' + this.bgMobileImgUrl + ')',
        'height': 100 + '%',
        'background-repeat': 'no-repeat',
        'background-color': 'black'
    };
    } else {
      this.size = "default";
      this.bgImageClass = {
        //'background-image': 'url(' + this.bgImgUrl + ')',
        'position': 'absolute',

      'left': '0',
      'width': '100%',
      'height': 100 + '%',
        'background-repeat': 'no-repeat',
        'background-position': 'right top'
      };
    }
  }
}
