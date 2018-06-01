import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../shared/country';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  private data:Observable<Country[]>;
  countries:Country[];
   

  constructor(private countryService:CountryService) { 
    this.countries=[];
  }
    
  ngOnInit() {
    this.gCountries();
  }

  gCountries(){
    this.countryService
    .getCountries()
    .subscribe(data=>{this.countries=data;});
  }
  ocountries(){
    
  }
}
