/**
 * Created by pratik on 23/8/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'landing-page',
 templateUrl: 'landing.page.html'
})

export class LandingPageComponent implements OnInit {
 constructor() { }

 ngOnInit() { }

  loadContent(){
   console.log('push content');
  }
}
