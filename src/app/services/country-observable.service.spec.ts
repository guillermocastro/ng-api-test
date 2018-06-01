import { TestBed, inject } from '@angular/core/testing';

import { CountryObservableService } from './country-observable.service';

describe('CountryObservableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryObservableService]
    });
  });

  it('should be created', inject([CountryObservableService], (service: CountryObservableService) => {
    expect(service).toBeTruthy();
  }));
});
