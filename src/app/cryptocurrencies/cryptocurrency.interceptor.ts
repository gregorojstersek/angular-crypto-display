import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {take, switchMap} from 'rxjs/operators';

import * as fromApp from '../store/app.reducers';
import * as fromSettings from '../settings/store/settings.reducers';

@Injectable()
export class CryptocurrencyInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('settings')
      .pipe(take(1),
        switchMap((settingsState: fromSettings.State) => {
          const copiedReq = req.clone({params: req.params.set('convert', settingsState.selectedCurrency)});
          return next.handle(copiedReq);
        }));
  }
}
