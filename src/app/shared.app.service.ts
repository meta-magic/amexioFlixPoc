/**
 * Created by pratik on 8/9/17.
 */
import { Injectable } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Injectable()
export class AppSharedService {

 videoUrl : any;
 baseUrl:string = 'https://www.youtube.com/embed/';

 constructor(private sanitizer : DomSanitizer) {}

 getVideoUrlSanitized(id : any) : any{
   return this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + id);
 }

}
