/**
 * Created by pratik on 28/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";
declare var $;
@Component({
 selector: 'amexio-youtube-player',
 template: `
   <div>
      <span  class="close-button">
        <i class="fa fa-times fa-lg" (click)="routeBackToApp()" aria-hidden="true"></i>
      </span>
     <div class="text-center">
       <iframe height="98%" width="98%" 
               style="position: absolute; top: 0; right: 0; bottom: 0; left: 0;padding-top: 30px;padding-left: 30px"
               [src]="url" frameborder="0"
               allowfullscreen>
         
       </iframe>
     </div>
   </div>
 `,
  styles:[`
    .close-button{
      cursor: pointer;
      padding-left: 98%;color:gray;background: radial-gradient(ellipse at top right,rgba(0,0,0,.4) 0,rgba(0,0,0,0)70%,rgba(0,0,0,0) 100%);
    }
  `]
})

export class AmexioYoutubePlayerComponent implements OnInit {

  name:string;
  baseUrl:string = 'https://www.youtube.com/embed/';
  url : any;

  @Input()  videoId : string;

  constructor(private sanitizer: DomSanitizer,private router : Router) {

  }

   ngOnInit() {
     this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.videoId);
   }

   ngAfterViewInit(){

   }

  routeBackToApp(){
     this.router.navigate(['/app']);
  }
}
