import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country} from '../shared/country';

@Injectable()
export class CountryService {
  constructor(private http:HttpClient) { }
  baseUrl:string='http://app06.valkian.com/odata/Countries';

  getCountries(){
    return this.http.get<Country[]>(this.baseUrl);
  }
  getCountryByCountryId(id:string){
    return this.http.get<Country>(this.baseUrl + "('" + id + "')");
  }
}
