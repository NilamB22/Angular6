import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { ValidateDirective } from './validate.directive';
import { CountriesComponent } from './countries/countries.component';
import { CitiesComponent } from './cities/cities.component';
import { FilterPipe } from './filter.pipe';
import { ServerCommunicationComponent } from './server-communication/server-communication.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchDataComponent } from './search-data/search-data.component';

import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { DialogService } from './services/dialog.service';
import { MyService } from './services/my.service';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[    BrowserModule,
        FormsModule,
        RouterTestingModule,
       HttpModule],
      declarations: [
        AppComponent, 
        LoginComponent,
        ValidateDirective,
        CountriesComponent,
        CitiesComponent,
        FilterPipe,
        ServerCommunicationComponent,
        WelcomeComponent,
        SearchDataComponent
      ],
      providers: [
        MyService,
        CanDeactivateGuardService,
        DialogService
    ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Angular'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.ComponentTitle).toEqual('Angular');
  }));
  it('should render title in a h3 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log('nilam',compiled);
    expect(compiled.querySelector('h3').textContent).toContain('Angular');
  }));
});
