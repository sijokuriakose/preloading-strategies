import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadStrategyService implements PreloadingStrategy {

  constructor() { }
  preload(route: any, load: () => Observable<any>) {
    if (route.data && route.data["preload"]) {
      return load();
    } else {
      return of(null);
    }
  }

}
