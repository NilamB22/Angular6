import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';



@Component({
  selector: 'server-communication',
  templateUrl: './server-communication.component.html',
  styleUrls: ['./server-communication.component.css'],
})
export class ServerCommunicationComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }


  public resultData: any[] = [];

  /*** fetch data from rest api */
  public getData(): void {

    var observable = this.http.get('http://services.groupkt.com/country/get/all').map(
      (response: Response) => response.json());

    observable.subscribe(
      (data) => { this.resultData = data.RestResponse.result },
      (error) => console.log(error)
    );
  }
}
