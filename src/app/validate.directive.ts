import { Directive,ElementRef, HostListener, Input} from '@angular/core';
import { hostElement } from '@angular/core/src/render3/instructions';

@Directive({
  selector: 'input[appValidate]'

})
export class ValidateDirective {
  public type:string;
  constructor(private hostelement:ElementRef) { 
       this.type =this.hostelement.nativeElement.type;
  }

  @HostListener("change", ["$event.target.value"])

 
  onchange(value) {
    if(this.type == 'text')
    {
       
        if(this.hostelement.nativeElement.value == null || this.hostelement.nativeElement.value == ""){
          this.hostelement.nativeElement.style.borderColor = "red";
        }
        else{
          this.hostelement.nativeElement.style.borderColor = "";
        }
    }
    else{
      console.log('Directive applicable for textboxes only');
    }

   
  }
}
