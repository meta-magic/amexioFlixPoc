/**
 * Created by pratik on 23/8/17.
 */
import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
 selector: 'landing-page',
 templateUrl: 'landing.page.html',
  styleUrls: ['landing.page.css']
})

export class LandingPageComponent implements OnInit {

  content: any[];

  episodeName: string;
  data : any[] = [1,2,3,4,5,6,7,8,9,10];
  public max = 10;
  public rate = 7;
  topRateContent : any;
 constructor() {
   this.content = [
     {
       'key': 'Director',
       'value': 'Clint Eastwood'
     },
     {
       'key': 'Starring',
       'value': '	Tom Hanks, Aaron Eckhart, Laura Linney'
     },
     {
       'key': 'Genres',
       'value': 'Drama: Biography'
     },
     {
       'key': 'Subtitles',
       'value': '	English [CC]'
     },
     {
       'key': 'Audio Languages',
       'value': 'English'
     }
     ];
   this.topRateContent = [
     {
       "img" : "https://art-s.nflximg.net/14920/d3ac1b7cfd14634ce68c442486bccbde33d14920.webp",
       "desc" : "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },
     {
       "img" : "https://art-s.nflximg.net/0beb0/8e68d4f6516d8c7a58e06af5d3d3c61e6050beb0.webp",
       "desc" : "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     }, {
       "img" : "https://art-s.nflximg.net/14920/d3ac1b7cfd14634ce68c442486bccbde33d14920.webp",
       "desc" : "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },
     {
       "img" : "https://art-s.nflximg.net/0beb0/8e68d4f6516d8c7a58e06af5d3d3c61e6050beb0.webp",
       "desc" : "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },
     {
       "img" : "https://art-s.nflximg.net/14920/d3ac1b7cfd14634ce68c442486bccbde33d14920.webp",
       "desc" : "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },
     {
       "img" : "https://art-s.nflximg.net/0beb0/8e68d4f6516d8c7a58e06af5d3d3c61e6050beb0.webp",
       "desc" : "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     }
   ]
 }

 ngOnInit() { }

 ngAfterViewInit(){
   // $('myModal').fullscreen();
 }
  loadContent(){
   console.log('push content');
  }

  addToList(data: any) {
    console.log(data);
  }
}
