/**
 * Created by dattaram on 23/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'amexio-content',
  template: `
    <div class=" img-fluid" [ngClass]="bgImageClass">
      <div class="col-lg-6 col-sm-12" style="padding: 70px 0 0 5%;color: white;">
      <h1 *ngIf="title">{{title}}</h1>
      <h5 *ngIf="description"><p>{{description}}</p></h5>
        <ng-container *ngIf="contents">
          <ul *ngFor="let data of contents">
            <li><b>{{data.key}}</b> : {{data.value}}</li>
          </ul>
        </ng-container>
      <ul class="nav">
        <li class="nav-item">
          <span class="nav-link"> <amexio-btn [label]="'Watch'" [type]="'primary'" [tooltipMessage]="'watch'" (onClick)="playVideo()"></amexio-btn>
      </span>
        </li>
        <li class="nav-item">
          <span class="nav-link"><amexio-btn [label]="'MY LIST'" [type]="'primary'" [tooltipMessage]="'My List'" (onClick)="addToList()"></amexio-btn></span>
        </li>
      </ul>
     <br>
      <ul class="nav">
        <li class="nav-item">
          <span class="nav-link" [ngClass]="likeActiveClass" (click)="likeClick()"> <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i></span>
        </li>
        <li class="nav-item">
          <span class="nav-link " [ngClass]="unlikeActiveClass" (click)="unlikeClick()"> <i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true"></i></span>
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
    </div>
  `,
  styles:[`
    .background-image{
      background-image: url('https://images-eu.ssl-images-amazon.com/images/S/sgp-catalog-images/region_GLOBAL/wb-5051888226353_IN-Full-Image_GalleryBackground-rw-RW-1502752057555._RI_VIWL02DwCvH1lDzpKFREvkQ9g04ODUzX0_TTW_SX1920_.jpg');
      height: 100%;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size:cover;
      background-repeat: no-repeat;
      background-position: 100% top;
      background-attachment: fixed;
    }
  `]
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

  likeActiveClass: string;

  unlikeActiveClass: string;

  bgImageClass: any;

  constructor() {
  }

  ngOnInit() {
    this.bgImageClass = {
      'background-image': 'url(this.bgImgUrl)',
      'height': 100 + '%'
    };
  }

  playVideo() {

  }
  addToList() {

  }
  likeClick() {
    this.likeActiveClass = 'active';
    this.unlikeActiveClass = '';
  }

  unlikeClick() {
    this.likeActiveClass = '';
    this.unlikeActiveClass = 'active';
  }
}
