import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { DataService} from '../services/data.service'
import 'rxjs/Rx';
@Component({
  selector: 'search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css']
})
export class SearchDataComponent implements OnInit {
  public searchResultData:  any={};
  public country_id:string='';

  constructor(private http: Http , private dataService:DataService) { }

  ngOnInit() {
  }


 /*** fetch data by country id */
 public getSearchData(): void {
  this.country_id= this.country_id.trim();
  this.dataService.getDataService().subscribe(
    (data) => { this.searchResultData = data['result'] },
    (error) => console.log(error)
  );
}
}

