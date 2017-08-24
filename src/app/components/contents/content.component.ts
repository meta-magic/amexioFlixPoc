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
        <li><b>{{data.key}}</b> : {{data.value}}</li>
      </ul>
    <button *ngIf="videoLink" class="btn btn-primary" >watch</button><br><br>
      <ul class="nav">
        <li class="nav-item">
          <span class="nav-link active"> <i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i></span>
        </li>
        <li class="nav-item">
          <span class="nav-link"> <i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true"></i></span>
        </li>
        <li class="nav-item">
          <span class="nav-link"> <i class="fa fa-check-circle-o fa-2x" aria-hidden="true"> MY LIST</i></span>
        </li>
      </ul>
     
     
    
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
