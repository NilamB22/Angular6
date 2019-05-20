import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataComponent } from './search-data.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { By } from '@angular/platform-browser';
import {DataService} from '../services/data.service'
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';



describe('SearchDataComponent', () => {
  let component: SearchDataComponent;
  let fixture: ComponentFixture<SearchDataComponent>;
  let httpTestingController: HttpTestingController;
  let dataService:DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,
      HttpModule,HttpClientTestingModule],
      providers:[DataService],
      declarations: [ SearchDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService = TestBed.get(DataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search data for given country code', () => {
 
    const response : any=[{}];
  
    const spy=  spyOn(dataService, 'getDataService').and.returnValue(of(response))
 
   
    component.getSearchData();
    expect(spy).toHaveBeenCalled();
    fixture.detectChanges();
  
    //expect(component.searchResultData).toEqual(response);
    });
});
