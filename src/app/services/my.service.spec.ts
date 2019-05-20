import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MyService } from './my.service';

describe('MyService', () => {
  let myService: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
       providers: [MyService],
   });
   myService = TestBed.get(MyService);
});

it('should be created', () => {
  const service: MyService = TestBed.get(MyService);
  expect(service).toBeTruthy();
});

it('should get countries',() => {

});

});
