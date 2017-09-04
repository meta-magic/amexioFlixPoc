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
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
       "matchPercentage" : "95",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "3",
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
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
       "matchPercentage" : "95",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "3",
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
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "13 Reasons Why",
       "img" : "assets/images/tvshows/shows/13_reasons_why_img.jpg",
       "details_img": "assets/images/tvshows/shows/13_reasons_details.jpg",
       "desc" : "After a teenage girl's perplexing suicide, a classmate receives a series of tapes that unravel the mystery of her tragic choice.",
       "video" : "hB-ltNasHVw",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
       "content" : [
         {
           'key': 'Creator',
           'value': 'Adam Wingard'
         },
         {
           'key': 'Cast',
           'value': 'Nat Wolf, Jason Lilles'
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
       "title" : "Death Note",
       "img" : "assets/images/tvshows/shows/death_note.jpg",
       "details_img": "assets/images/tvshows/shows/death_notes_details.jpg",
       "desc" : "Light Turner finds a supernatural notebook and uses it to mete out death, attracting the attention of a detective, a demon and a girl in his class.",
       "video" : "hB-ltNasHVw",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
       "content" : [
         {
           'key': 'Creator',
           'value': 'Adam Wingard'
         },
         {
           'key': 'Cast',
           'value': 'Nat Wolf, Jason Lilles'
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
       "title" : "Little Evil",
       "img" : "assets/images/tvshows/shows/little_evil_img.jpg",
       "details_img": "assets/images/tvshows/shows/little_evil_details.jpg",
       "desc" : "In this horror-comedy, a recently married man who wants to bond with his stepson begins to fear that the boy is a demon.",
       "video" : "X2x6IR3FhbQ",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
       "title" : "Orange Black",
       "img" : "assets/images/tvshows/shows/orange_black.jpg",
       "details_img": "assets/images/tvshows/shows/the_orange_details.jpg",
       "desc" : "A privileged New Yorker ends up in a women's prison when a past crime catches up with her in this Emmy-winning series from the creator of Weeds.",
       "video" : "ULwUzF1q5w4",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
       "title" : "Aditi Mittal",
       "img" : "assets/images/tvshows/shows/aditi_mittal.jpg",
       "details_img": "assets/images/tvshows/shows/aditi_mittal_details.jpg",
       "desc" : "Trailblazing comic Aditi Mittal mixes topical stand-up with frank talk about being single, wearing thongs and the awkwardness of Indian movie ratings.",
       "video" : "D_6J9BqgonU",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
       "title" : "Fauda",
       "img" : "assets/images/tvshows/shows/fauda.jpg",
       "details_img": "assets/images/tvshows/shows/fauda_details.jpg",
       "desc" : "A top Israeli agent comes out of retirement to hunt for a Palestinian militant he thought he'd killed, setting a chaotic chain of events into motion.",
       "video" : "5hAXVqrljbs",
       "matchPercentage" : "95",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "3",
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
       "title" : "The Mist",
       "img" : "assets/images/tvshows/shows/the_mist.jpg",
       "details_img": "assets/images/tvshows/shows/the_mist_details.jpg",
       "desc" : "Trapped by a mysterious fog, residents of a Maine village discover that it hides nightmarish creatures. A new series based on Stephen King's novella.",
       "video" : "JWtnJjn6ng0",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "The Siege",
       "img" : "assets/images/tvshows/shows/the_siege.jpg",
       "details_img": "assets/images/tvshows/shows/the_seige_details.jpg",
       "desc" : "Besieged by overwhelming enemy forces, Irish soldiers on a U.N. peacekeeping mission in Africa valiantly defend their outpost in this true story.",
       "video" : "nIgeVoVMv90",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
     }
   ];

   this.dramas = [
     {
       "title" : "Bahubali 2: The Conclusion",
       "img" : "assets/images/drama/bahubali2/Bahubali2_main_img.jpg",
       "details_img": "assets/images/drama/bahubali2/bahubali2_details.jpg",
       "desc" : "To avenge his father's death, a young man leads an army into battle against a cruel tyrant.",
       "video" : "G62HrubdD6o",
       "matchPercentage" : "94",
       "releaseYear" : "2017",
       "ageLimit" : "13",
       "seasonNo" : "1",
       "content" : [
         {
           "key":"Director",
           "value":"S.S Rajamouli"
         },
         {
           'key': 'Starring',
           'value': 'Prabhas, Ranna'
         },
         {
           'key': 'Genres',
           'value': 'Action '
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
     },
     {
       "title" : "Dangal",
       "img" : "assets/images/drama/dangal/Dangal_main_img.jpg",
       "details_img": "assets/images/drama/dangal/dangal_details.jpg",
       "desc" : "A once-promising wrestler pursues the gold medal he never won by training two of his daughters to compete at the Commonwealth Games.",
       "video" : "91ZI3IrojMU",
       "matchPercentage" : "95",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "3",
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
     },
     {
       "title" : "Interstellar",
       "img" : "assets/images/drama/Interstellar/interstellar_main_img.jpg",
       "details_img": "assets/images/drama/Interstellar/interstellar_details.jpg",
       "desc" : "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
       "video" : "0vxOhd4qlnA",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "Raees",
       "img" : "assets/images/drama/Raees/Raees_main_img.jpg",
       "details_img": "assets/images/drama/Raees/raees_details.jpg",
       "desc" : "After street smart kid Raees rises to become Gujarat's bootlegging king in the 1980s, he tries to balance his life of crime with helping his people.",
       "video" : "lpdRqn6xwiM",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "War Machine",
       "img" : "assets/images/drama/warmachine/war_machine_main_img.jpg",
       "details_img": "assets/images/drama/warmachine/war_machine_details.jpg",
       "desc" : "When a proud general is tasked with winning an unpopular war, he takes the challenge head-on, not knowing that hubris may be his own worst enemy.",
       "video" : "a9Jg20Ukf4E",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
     },
     {
       "title" : "A Big Short",
       "img" : "assets/images/drama/the_big_short.jpg",
       "details_img": "assets/images/drama/the_big_short_details.jpg",
       "desc" : "TA group of wily opportunists make a fortune off of the U.S. economic crash by sniffing out the situation in advance and betting against the banks.",
       "video" : "Xx---l5CoMQ",
       "matchPercentage" : "95",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "3",
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
     },
     {
       "titile" : "American Sniper",
       "img" : "assets/images/drama/american_sniper.jpg",
       "details_img": "assets/images/drama/american_sniper_details.jpg",
       "desc" : "U.S. Navy SEAL marksman Chris Kyle racks up an unprecedented number of kills in Iraq, even as his home life starts to slip away from him.",
       "video" : "CTbyaj8Y-Co",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "Dilwale",
       "img" : "assets/images/drama/dilwale.jpg",
       "details_img": "assets/images/drama/diwale_details.jpg",
       "desc" : "A young couple falls in love, but conflicting loyalties drive them apart. Years later, fate intervenes and hands them a second chance.",
       "video" : "nIgeVoVMv90",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
     },
     {
       "title" : "Queen",
       "img" : "assets/images/drama/queen.jpg",
       "details_img": "assets/images/drama/queen_details.jpg",
       "desc" : "A jilted bride decides to go on her European honeymoon anyway -- by herself -- and ends up embarking on a journey of self-discovery.",
       "video" : "L83qMnbJ198",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "Focus",
       "img" : "assets/images/drama/focus.jpg",
       "details_img": "assets/images/drama/focus_details.jpg",
       "desc" : "Three years after breaking off a romance with his protégé, expert con man Nicky Spurgeon finds her on the other side of his elaborate new scam.",
       "video" : "8hq28cZ938E",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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

   this.newreleases = [
     {
       "title" : "A Pretty Little Liar",
       "img" : "assets/images/newrelease/a.jpg",
       "details_img": "assets/images/newrelease/a_details.jpg",
       "desc" : "To avenge his father's death, a young man leads an army into battle against a cruel tyrant in this Hindi conclusion to the historic saga.",
       "video" : "Xx---l5CoMQ",
       "matchPercentage" : "95",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "3",
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
     },
     {
       "titile" : "Banking On Bitcoin",
       "img" : "assets/images/newrelease/bankingonbitcoin.jpg",
       "details_img": "assets/images/newrelease/bitcoin_details.jpg",
       "desc" : "A once-promising wrestler pursues the gold medal he never won by training two of his daughters to compete at the Commonwealth Games.",
       "video" : "CTbyaj8Y-Co",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "Naked",
       "img" : "assets/images/newrelease/naked.jpg",
       "details_img": "assets/images/newrelease/naked_details.jpg",
       "desc" : "With humanity teetering on the brink of extinction, a group of astronauts travels through a wormhole in search of another inhabitable planet.",
       "video" : "nIgeVoVMv90",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
     },
     {
       "title" : "Rustom",
       "img" : "assets/images/newrelease/rutstom.jpg",
       "details_img": "assets/images/newrelease/rustom_details.jpg",
       "desc" : "After street smart kid Raees rises to become Gujarat's bootlegging king in the 1980s, he tries to balance his life of crime with helping his people.",
       "video" : "L83qMnbJ198",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "Sand Of Castle",
       "img" : "assets/images/newrelease/sandcatle.jpg",
       "details_img": "assets/images/newrelease/sand_cattle_details.jpg",
       "desc" : "When a proud general is tasked with winning an unpopular war, he takes the challenge head-on, not knowing that hubris may be his own worst enemy.",
       "video" : "8hq28cZ938E",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
     },
     {
       "title" : "EL Chapo",
       "img" : "assets/images/newrelease/el_chapo.jpg",
       "details_img": "assets/images/newrelease/el_chapo_details.jpg",
       "desc" : "This drama series chronicles the true story of the rise, capture and escape of notorious Mexican drug lord Joaquín 'El Chapo' Guzmán.",
       "video" : "Xx---l5CoMQ",
       "matchPercentage" : "95",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "3",
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
     },
     {
       "titile" : "Now You See Me 2",
       "img" : "assets/images/newrelease/now_you_see.jpg",
       "details_img": "assets/images/newrelease/you_see_me_details.jpg",
       "desc" : "With a new member in the fold, the Four Horsemen use their power of illusion in a heist involving a shady tycoon and revolutionary tech device.",
       "video" : "CTbyaj8Y-Co",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "Black List",
       "img" : "assets/images/newrelease/the_black_list.jpg",
       "details_img": "assets/images/newrelease/the_black_list_details.jpg",
       "desc" : "After turning himself in, a brilliant fugitive offers to help the FBI bag other baddies, but only if rookie profiler Elizabeth Keen is his partner.",
       "video" : "nIgeVoVMv90",
       "matchPercentage" : "90",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "1",
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
     },
     {
       "title" : "The Soul",
       "img" : "assets/images/newrelease/the_soul.jpg",
       "details_img": "assets/images/newrelease/the_soul_details.jpg",
       "desc" : "This Emmy-nominated prequel to Breaking Bad follows small-time attorney Jimmy McGill as he transforms into morally challenged lawyer Saul Goodman.",
       "video" : "L83qMnbJ198",
       "matchPercentage" : "94",
       "releaseYear" : "2015",
       "ageLimit" : "13",
       "seasonNo" : "2",
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
     },
     {
       "title" : "A Pretty Little Liar",
       "img" : "assets/images/newrelease/a.jpg",
       "details_img": "assets/images/newrelease/a_details.jpg",
       "desc" : "To avenge his father's death, a young man leads an army into battle against a cruel tyrant in this Hindi conclusion to the historic saga.",
       "video" : "Xx---l5CoMQ",
       "matchPercentage" : "95",
       "releaseYear" : "2017",
       "ageLimit" : "16",
       "seasonNo" : "3",
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
