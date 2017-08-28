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
       "title" : "Marco Polo",
       "img" : "assets/images/tvshows/marcopolo/marco_polo_main_img.jpg",
       "details_img": "assets/images/tvshows/marcopolo/marco_polo_details.jpg",
       "desc" : "Set in a world of greed, betrayal, sexual intrigue and rivalry, “Marco Polo” is based on the famed explorer’s adventures in Kublai Khan’s court.",
       "video" : "hB-ltNasHVw",
       "content" : [
         {
           'key': 'Creator',
           'value': 'John Fusco'
         },
         {
           'key': 'Cast',
           'value': 'Chin Han, Joan Chen, Zhu Zhu, Tom Wu'
         },
         {
           'key': 'Genres',
           'value': 'TV Programmes'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },
     {
       "title" : "Narcos",
       "img" : "assets/images/tvshows/narcos/Narcos_main_img.jpg",
       "details_img": "assets/images/tvshows/narcos/narcos_details.jpg",
       "desc" : "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.",
       "video" : "U7elNhHwgBU",
       "content" : [
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
       ]
     },
     {
       "title" : "Shooter",
       "img" : "assets/images/tvshows/shooters/Shooter_main_img.jpg",
       "details_img": "assets/images/tvshows/shooters/shooter_details.jpg",
       "desc" : "A highly decorated ex-Marine sniper returns to action to foil an assassination plot targeting the president, but soon finds himself framed for murder. ",
       "video" : "X2x6IR3FhbQ",
       "content" : [
         {
           'key': 'Cast',
           'value': 'Rayan Phillepe, Omar Epps, Tom Sizemore'
         },
         {
           'key': 'Genres',
           'value': 'TV Programmes'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },
     {
       "title" : "House Of Cards",
       "img" : "assets/images/tvshows/house_of_cards/HOC_main_img.jpg",
       "details_img": "assets/images/tvshows/house_of_cards/house_of_cards_details.jpg",
       "desc" : "A ruthless politician will stop at nothing to conquer Washington, D.C., in this Emmy and Golden Globe-winning political drama.",
       "video" : "ULwUzF1q5w4",
       "content" : [
         {
           'key': 'Creator',
           'value': 'Beau William'
         },
         {
           'key': 'Cast',
           'value': 'Kevin Spacey, Robin Wright,Kate Mara'
         },
         {
           'key': 'Genres',
           'value': 'TV Programmes'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },
     {
       "title" : "Defenders",
       "img" : "assets/images/tvshows/designatedsurvivor/DS_main_img.jpg",
       "details_img": "assets/images/tvshows/designatedsurvivor/dc_details.jpg",
       "desc" : "While the conspirators make a surprise move, the FBI scrambles to arrest the ringleader. Kirkman asks Aaron to smoke out the White House traitor.",
       "video" : "D_6J9BqgonU",
       "content" : [
         {
           'key': 'Creator',
           'value': 'David Guggenheim'
         },
         {
           'key': 'Cast',
           'value': 'Kiefer Sutherland, Maggie Q, Kal Penn'
         },
         {
           'key': 'Genres',
           'value': 'TV Programmes'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },
     {
       "title" : "Ozark",
       "img" : "assets/images/tvshows/ozark/Ozark_main_img.jpg",
       "details_img": "assets/images/tvshows/ozark/ozark_details.jpg",
       "desc" : "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
       "video" : "5hAXVqrljbs",
       "content" : [
         {
           "key":"Creator",
           "value":"Mark Williams"
         },
         {
           'key': 'Cast',
           'value': 'Jason Bateman, Lasy Emery'
         },
         {
           'key': 'Genres',
           'value': 'TV Programmes'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },
     {
       "title" : "Crown",
       "img" : "assets/images/tvshows/crown/Crown_main_img.jpg",
       "details_img": "assets/images/tvshows/crown/crown_details.jpg",
       "desc" : "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
       "video" : "JWtnJjn6ng0",
       "content" : [
         {
           "key":"Creator",
           "value":"Peter Morgan"
         },
         {
           'key': 'Cast',
           'value': 'Claire Foy, Matt Smith, Jared Hamilton'
         },
         {
           'key': 'Genres',
           'value': 'TV Programmes'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     }

   ];

   this.dramas = [
     {
       "title" : "Bahubali 2: The Conclusion",
       "img" : "assets/images/drama/bahubali2/Bahubali2_main_img.jpg",
       "details_img": "assets/images/drama/bahubali2/bahubali2_details.jpg",
       "desc" : "To avenge his father's death, a young man leads an army into battle against a cruel tyrant in this Hindi conclusion to the historic saga.",
       "video" : "G62HrubdD6o",
       "content" : [
         {
           "key":"Director",
           "value":"S.S Rajamouli"
         },
         {
           'key': 'Starring',
           'value': 'Prabhas, Ranna, Tamannah, Ashushka'
         },
         {
           'key': 'Genres',
           'value': 'Action & Adventure, Dramas'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'Hindi'
         }
       ]
     },{
       "title" : "Dangal",
       "img" : "assets/images/drama/dangal/Dangal_main_img.jpg",
       "details_img": "assets/images/drama/dangal/dangal_details.jpg",
       "desc" : "A once-promising wrestler pursues the gold medal he never won by training two of his daughters to compete at the Commonwealth Games.",
       "video" : "91ZI3IrojMU",
       "content" : [
         {
           "key":"Director",
           "value":"Nitesh Tiwari"
         },
         {
           'key': 'Starring',
           'value': 'Aamir Khan, Sakshi, Fatima'
         },
         {
           'key': 'Genres',
           'value': 'Dramas, Biography'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'Hindi'
         }
       ]
     },{
       "title" : "Interstellar",
       "img" : "assets/images/drama/Interstellar/interstellar_main_img.jpg",
       "details_img": "assets/images/drama/Interstellar/interstellar_details.jpg",
       "desc" : "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
       "video" : "0vxOhd4qlnA",
       "content" : [
         {
           "key":"Director",
           "value":"Christopher Nolan"
         },
         {
           'key': 'Starring',
           'value': 'Matthwe, Anne, Jessica'
         },
         {
           'key': 'Genres',
           'value': 'International Movie, Award Winning Movie'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },{
       "title" : "Raees",
       "img" : "assets/images/drama/Raees/Raees_main_img.jpg",
       "details_img": "assets/images/drama/Raees/raees_details.jpg",
       "desc" : "After street smart kid Raees rises to become Gujarat's bootlegging king in the 1980s, he tries to balance his life of crime with helping his people.",
       "video" : "lpdRqn6xwiM",
       "content" : [
         {
           "key":"Director",
           "value":"Rahul Dholakia"
         },
         {
           'key': 'Starring',
           'value': 'Sharukh Khan, Mahir Khan'
         },
         {
           'key': 'Genres',
           'value': 'Crime, Action & Adventure'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'Hindi'
         }
       ]
     },{
       "title" : "War Machine",
       "img" : "assets/images/drama/warmachine/war_machine_main_img.jpg",
       "details_img": "assets/images/drama/warmachine/war_machine_details.jpg",
       "desc" : "When a proud general is tasked with winning an unpopular war, he takes the challenge head-on, not knowing that hubris may be his own worst enemy.",
       "video" : "a9Jg20Ukf4E",
       "content" : [
         {
           "key":"Director",
           "value":"David Michod"
         },
         {
           'key': 'Starring',
           'value': 'Brad Pitt, Topher Grace'
         },
         {
           'key': 'Genres',
           'value': 'International Movie, Drama'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     }

   ];

   this.newreleases = [
     {
       "title" : "A Pretty Little Liar",
       "img" : "assets/images/newrelease/a.jpg",
       "details_img": "assets/images/newrelease/a_details.jpg",
       "desc" : "To avenge his father's death, a young man leads an army into battle against a cruel tyrant in this Hindi conclusion to the historic saga.",
       "video" : "Xx---l5CoMQ",
       "content" : [
         {
           "key":"Creator",
           "value":"I Malene King"
         },
         {
           'key': 'Starring',
           'value': 'Troian, Ashely, Lucy'
         },
         {
           'key': 'Genres',
           'value': 'TV Programmes'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },{
       "titile" : "Banking On Bitcoin",
       "img" : "assets/images/newrelease/bankingonbitcoin.jpg",
       "details_img": "assets/images/newrelease/bitcoin_details.jpg",
       "desc" : "A once-promising wrestler pursues the gold medal he never won by training two of his daughters to compete at the Commonwealth Games.",
       "video" : "CTbyaj8Y-Co",
       "content" : [
         {
           "key":"Creator",
           "value":"Christopher Cannucciar"
         },
         {
           'key': 'Genres',
           'value': 'Documentary'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },{
       "title" : "Naked",
       "img" : "assets/images/newrelease/naked.jpg",
       "details_img": "assets/images/newrelease/naked_details.jpg",
       "desc" : "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
       "video" : "nIgeVoVMv90",
       "content" : [
         {
           "key":"Starring",
           "value":"Marlon Wayans, Dennis, Eliza"
         },
         {
           "key":"Creator",
           "value":"Michale Tiddes"
         },
         {
           'key': 'Genres',
           'value': 'International Movie, Comedies'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
     },{
       "title" : "Rustom",
       "img" : "assets/images/newrelease/rutstom.jpg",
       "details_img": "assets/images/newrelease/rustom_details.jpg",
       "desc" : "After street smart kid Raees rises to become Gujarat's bootlegging king in the 1980s, he tries to balance his life of crime with helping his people.",
       "video" : "L83qMnbJ198",
       "content" : [
         {
           "key":"Starring",
           "value":"Akshay Kumar, Esha Gupta, Pavan Malhotra"
         },
         {
           "key":"Director",
           "value":"Dharmendra"
         },
         {
           'key': 'Genres',
           'value': 'Crime'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'Hindi'
         }
       ]
     },{
       "title" : "Sand Of Castle",
       "img" : "assets/images/newrelease/sandcatle.jpg",
       "details_img": "assets/images/newrelease/sand_cattle_details.jpg",
       "desc" : "When a proud general is tasked with winning an unpopular war, he takes the challenge head-on, not knowing that hubris may be his own worst enemy.",
       "video" : "8hq28cZ938E",
       "content" : [
         {
           "key":"Starring",
           "value":"Nicholos Hoult, Logan, Neil"
         },
         {
           "key":"Director",
           "value":"Fernado Coimara"
         },
         {
           'key': 'Genres',
           'value': 'Internation Movie, British Movie, Adventure'
         },
         {
           'key': 'Subtitles',
           'value': '	English [CC]'
         },
         {
           'key': 'Audio Languages',
           'value': 'English'
         }
       ]
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
