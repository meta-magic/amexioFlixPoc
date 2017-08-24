/**
 * Created by pratik on 24/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
 selector: 'amexio-media-content',
 template: `
   <img class="carosel-item" src="http://via.placeholder.com/350x150/bbbbbb/fff&amp;text={{id+1}}" />
 `,
  styleUrls : ['carousel.style.css']
})

export class MediaContentItem implements OnInit {

  @Input() id : string;
  constructor() { }

  ngOnInit() { }
}
