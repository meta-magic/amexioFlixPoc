/**
 * Created by dattaram on 23/8/17.
 */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'amexio-content',
  template: `
    
      <h1>{{title}}</h1>
      <h5><p>{{description}}
      </p></h5>
      <ul *ngFor="let data of contents">
        <li><b style="color: black">{{data.key}}</b> : {{data.value}}</li>
      </ul>
    <button *ngIf="videoLink" class="btn btn-primary" >watch</button>
    
  `
})

export class ContentComponent implements OnInit {

  @Input() title: string;

  @Input() description: string;

  @Input() contents: any;

  @Input() videoLink: any;

  constructor() {
  }

  ngOnInit() {
  }
}
