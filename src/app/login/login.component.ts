import { Component, OnInit } from '@angular/core';
import { Observable }    from 'rxjs';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _dialogService:DialogService) { }
  ngOnInit() { }

  loginData: any = {};
  public UserName: string;
  public Password: string;
  public RememberMe: boolean;
  public bgcolor: string = '';

  /**
   * validateLogin : check user valid or not
   */
  public validateLogin(loginData): void {
    if (loginData.UserName == 'test' && loginData.Password == 'test') {
      this.bgcolor = 'green';
    }
    else {
      this.bgcolor = 'red';
    }
    console.log(loginData);
  }

  canDeactivate(): Observable<boolean> | boolean {
    
  //  return this._dialogService.confirm('Navigationg Away?');
  return this._dialogService.confirmbox();

} 
}
