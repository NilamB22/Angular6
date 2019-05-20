import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  public cities:string[]=[];
  public arr;
  constructor() { }
 

  /**
   * GetCountries
   */
  public GetCountries():string[] {
    this.arr = ["India","Usa","Australia","Argentina"];
    return this.arr;
  }

  /**
   * GetCities
   */
  public GetCities(country):string[] {
    this.cities =[];
    console.log('inside get city service  : '+country);
    if(country=='India')
    {
        this.cities.push('Mumbai');
        this.cities.push('Delhi');
    }
    if(country=='Argentina')
    {
        this.cities.push('test');
        this.cities.push('adfasdf');
        this.cities.push('tes');
    }
    if(country=='usa')
    {
        this.cities.push('New York');
        this.cities.push('LA');
        this.cities.push('Chicago');
    }
    if(country=='Australia')
    {
        this.cities.push('Sydney');
        this.cities.push('Melbourne');
        this.cities.push('Canberra');
    }
  
    return this.cities;
  }
}
