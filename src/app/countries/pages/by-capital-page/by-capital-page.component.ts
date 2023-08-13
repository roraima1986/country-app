import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit {

  public countries:Country[] = [];
  public isLoading: boolean = false;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
  }

  searchByCapital(term:string):void{

    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });

      console.log({term});
  }

}
