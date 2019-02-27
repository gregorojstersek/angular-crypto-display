import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as fromApp from '../store/app.reducers';
import * as fromSettings from '../settings/store/settings.reducers';
import * as CryptocurrencyActions from './store/cryptocurrency.actions';
import * as fromCryptocurrency from './store/cryptocurrency.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cryptocurrency } from './cryptocurrency.model';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.scss']
})
export class CryptocurrenciesComponent implements OnInit {

  cryptocurrencies: Cryptocurrency[] = [];

  settingsState: Observable<fromSettings.State>;
  cryptocurrencyState: Observable<fromCryptocurrency.State>;

  constructor(private router: Router, private store: Store<fromApp.AppState>, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCryptoCurrencies();
    this.settingsState = this.store.select('settings');
    this.cryptocurrencyState = this.store.select('cryptocurrency');
  }

  getCryptoCurrencies = () => {
    this.store.dispatch(new CryptocurrencyActions.GetCryptoCurrencies());
  }

  goToCryptocurrency = (id) => {
    this.router.navigate([`cryptocurrencies/${id}`]);
  }

}
