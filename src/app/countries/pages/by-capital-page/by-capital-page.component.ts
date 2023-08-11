import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit {

  public countries:Country[] = []

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
  }

  searchByCapital(term:string):void{
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
      });

      console.log({term});
  }

}
