/**
 * Created by pratik on 23/8/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-nav-bar',
 templateUrl: 'page.nav.bar.html'
})

export class AppNavBarComponent implements OnInit {

  bindData: any;

  isMobile: boolean;

  alignClass: string='dropdown-menu-right'

 constructor() {
   this.bindData = {
     "response": {
       "success": true,
       "message": "Fetching  Data  Request Succeeded: Profile",
       "data": [
         {
           "name": "House Of Cards",
           "profile": "44.jpg"
         },
         {
           "name": "Game Of Thrones",
           "profile": "11.jpg"
         },
         {
           "name": "Jurassic Shark",
           "profile": "22.jpg"
         },
         {
           "name": "Hansel vs Gretel",
           "profile": "33.jpg"
         }
       ]
     }
   };
 }

 ngOnInit() { }

  onResize(event: any) {
    if (event.target.innerWidth < 995) {
      this.isMobile = true;
      this.alignClass = 'dropdown-menu-left';
    } else {
      this.isMobile = false;
    }
  }
}
