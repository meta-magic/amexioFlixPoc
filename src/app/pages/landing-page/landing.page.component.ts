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
  public max = 5;
  public rate = 4;
  topRateContent : any;
  dramas : any;
  newreleases: any;
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
       "img" : "assets/images/tvshows/house_of_cards/HOC_main_img.png",
       "desc" : "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },
     {
       "img" : "assets/images/tvshows/designatedsurvivor/DS_main_img.png",
       "desc" : "While the conspirators make a surprise move, the FBI scrambles to arrest the ringleader. Kirkman asks Aaron to smoke out the White House traitor.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     }, {
       "img" : "assets/images/tvshows/narcos/Narcos_main_img.png",
       "desc" : "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },
     {
       "img" : "assets/images/tvshows/shooters/Shooter_main_img.png",
       "desc" : "A highly decorated ex-Marine sniper returns to action to foil an assassination plot targeting the president, but soon finds himself framed for murder. ",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },
     {
       "img" : "assets/images/tvshows/ozark/Ozark_main_img.png",
       "desc" : "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },
     {
       "img" : "assets/images/tvshows/crown/Crown_main_img.png",
       "desc" : "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     }

   ];

   this.dramas = [
     {
       "img" : "assets/images/drama/bahubali2/Bahubali2_main_img.png",
       "desc" : "To avenge his father's death, a young man leads an army into battle against a cruel tyrant in this Hindi conclusion to the historic saga.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },{
       "img" : "assets/images/drama/dangal/Dangal_main_img.png",
       "desc" : "A once-promising wrestler pursues the gold medal he never won by training two of his daughters to compete at the Commonwealth Games.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },{
       "img" : "assets/images/drama/Interstellar/interstellar_main_img.png",
       "desc" : "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },{
       "img" : "assets/images/drama/Raees/Raees_main_img.png",
       "desc" : "After street smart kid Raees rises to become Gujarat's bootlegging king in the 1980s, he tries to balance his life of crime with helping his people.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },{
       "img" : "assets/images/drama/warmachine/war_machine_main_img.png",
       "desc" : "When a proud general is tasked with winning an unpopular war, he takes the challenge head-on, not knowing that hubris may be his own worst enemy.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     }

   ];

   this.newreleases = [
     {
       "img" : "assets/images/newrelease/a.png",
       "desc" : "To avenge his father's death, a young man leads an army into battle against a cruel tyrant in this Hindi conclusion to the historic saga.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },{
       "img" : "assets/images/newrelease/bankingonbitcoin.png",
       "desc" : "A once-promising wrestler pursues the gold medal he never won by training two of his daughters to compete at the Commonwealth Games.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },{
       "img" : "assets/images/newrelease/naked.png",
       "desc" : "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },{
       "img" : "assets/images/newrelease/rutstom.png",
       "desc" : "After street smart kid Raees rises to become Gujarat's bootlegging king in the 1980s, he tries to balance his life of crime with helping his people.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
     },{
       "img" : "assets/images/newrelease/sandcatle.png",
       "desc" : "When a proud general is tasked with winning an unpopular war, he takes the challenge head-on, not knowing that hubris may be his own worst enemy.",
       "video" : "https://www.youtube.com/watch?v=ULwUzF1q5w4"
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
