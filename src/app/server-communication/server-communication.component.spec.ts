import { async, ComponentFixture, TestBed,inject  } from '@angular/core/testing';

import { ServerCommunicationComponent } from './server-communication.component';
import { Http, Response,HttpModule, ResponseOptions, ResponseType } from '@angular/http';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'
import {DataService} from '../services/data.service';
import { of } from 'rxjs';

describe('ServerCommunicationComponent', () => {
  let component: ServerCommunicationComponent;
  let fixture: ComponentFixture<ServerCommunicationComponent>;
  let httpTestingController: HttpTestingController;
  let dataService:DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,HttpModule],
      providers:[DataService],
      declarations: [ ServerCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerCommunicationComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    fixture.detectChanges();
  });
  it('should get city', () => {
    // const dataService = TestBed.get(DataService);
    // const http = TestBed.get(HttpTestingController);
   
  
    // dataService.getDataService().subscribe((response) => {
    //   const datatest={"result":[{
    //     "name": "Western Sahara",
    //     "code": "EH"
    //   }]}
   
    // expect(component.resultData).toEqual(response['result']);
    // expect(response.error).toEqual(response.error)
    // });

    const response : any={};
  
    spyOn(dataService, 'getDataService').and.returnValue(of(response))
 
   
    component.getData();
    fixture.detectChanges();
  
    expect(component.resultData).toEqual(response['result']);
  
 
  });
  
});
