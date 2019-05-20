import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'
import 'rxjs/Rx';



@Component({
  selector: 'server-communication',
  templateUrl: './server-communication.component.html',
  styleUrls: ['./server-communication.component.css'],
})
export class ServerCommunicationComponent implements OnInit {

  constructor(
    private dataService:DataService
    ) { }

  ngOnInit() {
  }


  public resultData: any[] = [];

  /*** fetch data from rest api */
  public getData(): void {
      this.dataService.getDataService().subscribe(
      (data) => { this.resultData = data['result'] },
      (error) => console.log(error)
    );
  }
}
