import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html'
})
export class CountryPageComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap(({id})  => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe(country => {
        if (!country){
          return this.router.navigateByUrl('');
        }

        console.log('Tenemos un pais');
        return;
      });
  }


}
