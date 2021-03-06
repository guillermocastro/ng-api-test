import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './countries/country/country.component';
import { CountryListComponent } from './countries/country-list/country-list.component';
import { CountryService } from './services/country.service';
import { CountryObservableService } from './services/country-observable.service';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceService } from './services/resource.service';
import { HeadersComponent } from './headers/headers.component';
import { LogonComponent } from './logon/logon.component';



@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryComponent,
    CountryListComponent,
    ResourcesComponent,
    ResourceListComponent,
    HeadersComponent,
    LogonComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CountryService,ResourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
