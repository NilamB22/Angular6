import { Component, OnInit } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { MyService } from '../services/my.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [MyService],

})
export class CountriesComponent implements OnInit {

  countries: string[];
  selectedCountry: string;
  selectedCity: string;

  constructor(private _myService: MyService ) {
    this.countries = this._myService.GetCountries();
  }
  ngOnInit() {
  }

  /**
   * getSelectedCity
   * event is payload event send by child
   */
  public getSelectedCity(event) {

    this.selectedCity = event;

  }



}