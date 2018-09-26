import { Component } from '@angular/core';

@Component({
  selector: 'root-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentTitle: string = "Angular"; 
  FontColor: string = "panel-heading-custom";
  CurrentDate:Date=new Date();
}
