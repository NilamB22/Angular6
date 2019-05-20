import { TestBed,inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';


describe('Data Service', () => {
  let dataService: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
     TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [DataService]
    });
    dataService = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
});

afterEach(() => {
    httpMock.verify();
});

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch data with proper sorting', () => {
      const mockdata={"result":[{
        "name": "Western Sahara",
        "code": "EH"
      }]}
      // We call the service
      dataService.getDataService().subscribe(data => {
        expect(data['result'].length).toBe(1);
        expect(data).toEqual(mockdata);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne(dataService.ROOT_URL);
     
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      req.flush(mockdata);
    });

});
