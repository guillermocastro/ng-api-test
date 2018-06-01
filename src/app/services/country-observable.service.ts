import { Injectable } from '@angular/core';
import {Country} from "../shared/country";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CountryObservableService {

  baseUrl:string='http://app06.valkian.com/odata/Countries';
  constructor(private _htc:HttpClient) { }

  getData():Observable<Country[]>{
    return this._htc.get<Country[]>(this.baseUrl);  
  }
}
