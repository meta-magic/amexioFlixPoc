/**
 * Created by dattaram on 23/8/17.
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'amexio-content',
  template: `
    <div class=" img-fluid" [ngStyle]="bgImageClass" (window:resize)="onResize()">
      <div class="col-lg-6 col-sm-12" style="padding: 70px 0 0 5%;color: white;">
      <h1 *ngIf="title">{{title}}</h1>
        
      <h5 *ngIf="description"><p>{{description}}</p></h5>
        <ng-container *ngIf="contents">
          <ul *ngFor="let data of contents">
            <li><b>{{data.key}}</b> : {{data.value}}</li>
          </ul>
        </ng-container>
      <ul class="nav">
        <li class="nav-item" *ngIf="enableWatch">
          <span class="nav-link"> <amexio-btn [label]="'Watch'" [type]="'danger'" [icon]="'fa fa-play'" [tooltipMessage]="'watch'" (onClick)="playVideo()"></amexio-btn>
      </span>
        </li>
        <li class="nav-item" *ngIf="enableMyList">
          <span class="nav-link"><amexio-btn [label]="'MY LIST'" [icon]="'fa fa-plus'" [type]="'secondary'" [tooltipMessage]="'My List'" (onClick)="addToList()"></amexio-btn></span>
        </li>
      </ul>
     <br>
        <ng-container *ngIf="rate && max">
        <amexio-rating-input [(ngModel)]="rate"
                             [max]="max" name="rate"
                             [readonly]="isReadonly">
        </amexio-rating-input>
        </ng-container>
       
      </div>
      <div class="col-lg-12">
        <ng-content></ng-content><br><br>
      </div>
    </div>
  `,
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

  constructor() {

  }

  ngOnInit() {
    this.onResize();
  }

  playVideo() {
   this.onWatchClick.emit(this.videoLink);
  }
  addToList() {
  this.onAddListClick.emit(this.title);
  }
  onResize() {
    if (window.innerWidth < 995) {
      this.bgImageClass = {
        'background-image': 'url(' + this.bgMobileImgUrl + ')',
        'height': 100 + '%',
        'background-repeat': 'no-repeat',
        'background-color': 'black'
    };
    } else {
      this.bgImageClass = {
        'background-image': 'url(' + this.bgImgUrl + ')',
        'height': 100 + '%',
        'background-repeat': 'no-repeat'
      };
    }
  }
}
