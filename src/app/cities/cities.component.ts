import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MyService } from '../my.service';

@Component({
  selector: 'cities-component',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {


  constructor(private _myService: MyService) { }

  ngOnInit() { }

  public cities: string[] = [];
  public selectedCountry: string;
  public selectedCity: string;

  @Output()  //only on data member whose data type is eventenmitter
  public cityNotification: EventEmitter<string> = new EventEmitter<string>(); //notoification back to the parent

  //value will come from parent;

  @Input()
  public set Country(value) {
    this.selectedCountry = value;
    this.cities = this._myService.GetCities(this.selectedCountry);
  }

  /**
   * NotifyParent : whenever user selected city notify parent i.e country
   * send notification to parent
   */
  public NotifyParent(): void {
    this.cityNotification.emit(this.selectedCity)
  }

}
