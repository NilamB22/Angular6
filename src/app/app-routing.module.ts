import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CountriesComponent } from './countries/countries.component';
import { ServerCommunicationComponent } from './server-communication/server-communication.component';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';

const routes :Routes =[
  { 
    path: 'login', 
    component: LoginComponent ,
    canDeactivate:[CanDeactivateGuardService]
  },
  { 
    path: 'country', 
    component: CountriesComponent 
  },
  { 
    path: 'ServerCommunication', 
    component: ServerCommunicationComponent 
  },
  {
    path: '**', 
    component: WelcomeComponent 
  }
]
export default RouterModule.forRoot(routes);
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forChild(routes) ],
  providers: [
    CanDeactivateGuardService,
  ]
})


export class AppRoutingModule {
  
 }
