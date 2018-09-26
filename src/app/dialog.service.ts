import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DialogService {
  // public confirm(message?: string): Observable<boolean> {
  //   const confirmation = window.confirm(message || 'Are you sure?');

  //   return Observable.of(confirmation);
  // };

  public confirmbox(): boolean {
    return confirm( 'Are you sure?');
  };
} 
