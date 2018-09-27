import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
@Component({
  selector: 'search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }
  public searchResultData:  any[]=[];
  public country_id:string;

 /*** fetch data by country id */
 public getSearchData(): void {
   
  this.searchResultData =[];
  var observable = this.http.get('http://services.groupkt.com/country/get/iso2code/'+this.country_id).map(
    (response: Response) => response.json());

  observable.subscribe(
    (data) => {this.searchResultData.push(data.RestResponse.result)},
    (error) => console.log(error)
  );
}
}
