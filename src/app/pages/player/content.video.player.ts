/**
 * Created by pratik on 28/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {fadeInAnimation} from "./fade-in.animation";

@Component({
  selector: 'app-player',
  template : `    
    <amexio-youtube-player [videoId]="vidId"></amexio-youtube-player>
  `,
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class PlayerComponent implements OnInit {
  vidId : any;
  constructor(private route : ActivatedRoute) {
    this.vidId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  routeBackToApp(){
    debugger;
  }
}
