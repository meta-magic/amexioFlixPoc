/**
 * Created by pratik on 28/8/17.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {fadeInAnimation} from "./fade-in.animation";
import {AppSharedService} from "../../shared.app.service";

@Component({
  selector: 'app-player',
  template : `
    <amexio-ee-youtube-player [videoId]="url"></amexio-ee-youtube-player>
  `,
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class PlayerComponent implements OnInit {
  vidId : any;
  url : any;
  constructor(private route : ActivatedRoute,private appService : AppSharedService) {
    this.vidId = this.route.snapshot.params['id'];
    this.url = this.appService.getVideoUrlSanitized(this.vidId);
  }

  ngOnInit() {
  }

}
