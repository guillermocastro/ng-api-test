import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryModel} from '../shared/country-model';
@Injectable()
export class CountryServiceService {

  constructor(private http:HttpClient) { }
  baseUrl:string='http://app06.valkian.com/odata/Countries';

  getCountries(){
    return this.http.get<CountryModel[]>(this.baseUrl);
  }
  getCountryByCountryId(id:string){
    return this.http.get<CountryModel>(this.baseUrl + "('" + id + "')");
  }
}
