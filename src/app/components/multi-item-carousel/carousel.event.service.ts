/**
 * Created by pratik on 26/8/17.
 */
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class CarouselEventService {

  private _stateSource: Subject<Object> = new Subject<Object>();
  public state$: Observable<Subject<Object>> = this._stateSource.asObservable();

  constructor() {

  }

  public close(elementId): void {
    this._stateSource.next({ state :false ,id : elementId});
  }

  public open(elementId): void {
    this._stateSource.next({ state :true ,id : elementId});
  }


}
