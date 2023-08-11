import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent implements OnInit {

  public countries:Country[] = []

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
  }

  searchByRegion(term:string):void{
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;
      });

      console.log({term});
  }

}
