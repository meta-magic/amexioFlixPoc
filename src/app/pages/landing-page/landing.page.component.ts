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
  mostWatched : any;
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
   ];
   this.mostWatched = [
     {
       "img" : "https://art-s.nflximg.net/4c9da/3304be5443093b27a2abc94f0e0b12d7a424c9da.webp",
       "desc" : "",
       "video" : ""
     },
     {
       "img" : "https://art-s.nflximg.net/50e13/51436ffdabccb349035384c50d55cd491bc50e13.webp",
       "desc" : "",
       "video" : ""
     },
     {
       "img" : "https://art-s.nflximg.net/d851d/c21912319624d3b031ead1dddc37322aa40d851d.webp",
       "desc" : "",
       "video" : ""
     },
     {
       "img" : "https://art-s.nflximg.net/946ee/9771a7b34aef9f8710828dab8171b545059946ee.webp",
       "desc" : "",
       "video" : ""
     },
     {
       "img" : "https://art-s.nflximg.net/4634f/71ad82b41231f2c8af3734410100eb5d0744634f.webp",
       "desc" : "",
       "video" : ""
     },
     {
       "img" : "https://art-s.nflximg.net/9046b/5f048a86d29173368e5ad46256b4cb965249046b.webp",
       "desc" : "",
       "video" : ""
     },
     {
       "img" : "https://art-s.nflximg.net/6729a/8798e55d7a52261ef06aaf40972e5e761056729a.webp",
       "desc" : "",
       "video" : ""
     }
   ];
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
