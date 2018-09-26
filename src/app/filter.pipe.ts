import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(fullText: string, start: string): string {
      if(fullText.startsWith(start))
      {
        return fullText;
      }
       else
       {
         return ;
       }
    }
  }


