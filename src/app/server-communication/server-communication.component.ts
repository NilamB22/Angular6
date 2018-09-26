import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';



@Component({
  selector: 'server-communication',
  templateUrl: './server-communication.component.html',
  styleUrls: ['./server-communication.component.css']
})
export class ServerCommunicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public resultData :any[]=[];
 /**
  * fetch data from rest api
  */
//  public getData():Observable<any[]> {
   
//    this.resultData=[1,2];
//  // return this.http.get('http://services.groupkt.com/country/get/iso2code/IN').map({};


//  }
}
