/**
 * Created by pratik on 23/8/17.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
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
  documentries:any;
  changingEpisodeData : any;
 constructor(private router: Router,private http : Http) {}

 ngOnInit() {
   this.getData('assets/data/content.json').subscribe( resp=> this.content = resp.json());
  this.getData('assets/data/topratedcontent.json').subscribe(resp=> {
    this.topRateContent = resp.json();
    this.changingEpisodeData = this.topRateContent[0].episode;
  });
  this.getData('assets/data/dramas.json').subscribe( resp=> this.dramas = resp.json());
  this.getData('assets/data/newreleases.json').subscribe( resp=> this.newreleases = resp.json());
  this.getData('assets/data/documentaries.json').subscribe( resp=> this.documentries = resp.json());
 }

 getData(url : string){
   return this.http.get(url)
 }

 ngAfterViewInit(){
   // $('myModal').fullscreen();
 }
  loadContent(){
   console.log('push content');
  }


  playVideo(video : any){
    this.router.navigate(['player',video]);
  }

  changeData(data){
    console.log(data);
    if(data.episode == 'Season 1'){
      console.log('Changing');
      console.log(this.topRateContent[0].episode);
      this.changingEpisodeData = this.topRateContent[0].episode;
    }

    else{
      console.log('Changing 2');
      console.log(this.topRateContent[1].episode);
      this.changingEpisodeData = this.topRateContent[1].episode;
    }

  }
}


