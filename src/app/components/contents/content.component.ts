/**
 * Created by dattaram on 23/8/17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'amexio-content',
  template: `

    <div class="maincontent">

      <img class="img-fluid" [attr.src]="bgImgUrl" alt="Featured Content">

      <div>
        <div class="col-lg-6 col-sm-12" style="padding: 10px 0 0 5%;color: white;">
          <h3 *ngIf="title">{{title}}</h3>
          <span *ngIf="description"><p>{{description}}</p></span>
          <ng-container *ngIf="contents">
            <span  *ngFor="let data of contents" >
              {{data.key}} : {{data.value}}
              <br/>
            </span>
          </ng-container>
          <br/>
          <table style="height: 100%">
            <tr>
              <td>
                <amexio-btn *ngIf="enableWatch" [label]="'Watch'" [type]="'danger'" [icon]="'fa fa-play'" [tooltipMessage]="'watch'" (onClick)="playVideo()"></amexio-btn>
              </td>
              <td>
                <amexio-btn *ngIf="enableMyList" [label]="'MY LIST'" [icon]="'fa fa-plus'" [type]="'secondary'" [tooltipMessage]="'My List'" (onClick)="addToList()"></amexio-btn>
              </td>
            </tr>
            <tr *ngIf="rate && max">
              <td>
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
          visibility: hidden;
        }
      }
     
    `
  ]
})

export class ContentComponent implements OnInit {

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

  @Output() onWatchClick: EventEmitter<any>= new EventEmitter<any>();

  @Output() onAddListClick: EventEmitter<any>= new EventEmitter<any>();

  bgImageClass: any;

  overviewData: any;

  constructor() {

  }

  ngOnInit() {
    this.onResize();
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
    }
  this.onAddListClick.emit(this.overviewData);
  }
  onResize() {
    if (window.innerWidth < 995) {
      this.bgImageClass = {
        //'background-image': 'url(' + this.bgMobileImgUrl + ')',
        'height': 100 + '%',
        'background-repeat': 'no-repeat',
        'background-color': 'black'
    };
    } else {
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
