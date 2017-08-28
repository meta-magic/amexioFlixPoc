/**
 * Created by pratik on 28/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player',
  template : `
    
    <amexio-youtube-player [videoId]="vidId"></amexio-youtube-player>
  `
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
