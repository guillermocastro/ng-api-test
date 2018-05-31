import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from '../../services/country-service.service';
import { CountryModel} from '../../shared/country-model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries:CountryModel[];

  constructor(private countryService:CountryServiceService) { }

  ngOnInit() {
    this.countryService.getCountries()
    .subscribe(data=>{this.countries=data;});
  }

}
