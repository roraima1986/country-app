import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnInit {

  public countries:Country[] = []

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
  }

  searchByCountry(term:string):void{
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
      });

      console.log({term});
  }

}
