import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { DialogService } from '../services/dialog.service';
import { By } from '@angular/platform-browser';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ LoginComponent ],
      providers:[DialogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    var test = spyOn(component._dialogService, 'confirmbox');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be empty username', async(() => {
    // let fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(  By.css('input[name="UserName"]'));
      let el = input.nativeElement;
      el.textContent = 'test';
      console.log(el);
      el.dispatchEvent(new Event('input'));
      expect(el.textContent).toBe('test');
    });
  }));

  describe("should validate login",function(){
    it("The function should validate login success",function() {
      let loginData={
        UserName:'test',
        Password:'test123'
      }
    var value=component.validateLogin(loginData);
    expect(component.bgcolor).toEqual('red');
    });
    it("The function should validate login fail",function() {
      let loginData={
        UserName:'test',
        Password:'test'
      }
    var value=component.validateLogin(loginData);
    expect(component.bgcolor).toEqual('green');
    });
  });
  it("The function should alert when leave page",function() {
    var value=component.canDeactivate();
    expect(component._dialogService.confirmbox).toHaveBeenCalled();
  });
});
