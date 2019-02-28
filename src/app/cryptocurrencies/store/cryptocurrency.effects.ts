import {Injectable} from '@angular/core';
import {Actions, Effect, ofType } from '@ngrx/effects';
import {switchMap, withLatestFrom, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';

import * as CryptocurrencyActions from './cryptocurrency.actions';
import * as fromApp from '../../store/app.reducers';

@Injectable()
export class CryptocurrencyEffects {

  selectedCurrency: string;
  cryptocurrencyDetailsId: number;

  @Effect()
  cryptocurrenciesGet = this.actions$.pipe(
    ofType(CryptocurrencyActions.GET_CRYPTOCURRENCIES),
    withLatestFrom(this.store.select('settings')),
    switchMap(([action, settingsState]) => {
      this.selectedCurrency = settingsState.selectedCurrency;
      return this.httpClient.get<any>('http://localhost:4200/api/cryptocurrencies', {
        observe: 'body',
        responseType: 'json'
      });
    }), map(
      (response) => {
        const cryptocurrencies = response.data.map(cryptocurrency => {
          return {
            id: cryptocurrency.id,
            rank: cryptocurrency.cmc_rank,
            name: cryptocurrency.name,
            symbol: cryptocurrency.symbol,
            price: cryptocurrency.quote[this.selectedCurrency].price,
            percentChange24h: cryptocurrency.quote[this.selectedCurrency].percent_change_24h,
          };
        });

        return {
          type: CryptocurrencyActions.SET_CRYPTOCURRENCIES,
          payload: cryptocurrencies
        };
    })
  );

  @Effect()
  cryptocurrencyGet = this.actions$.pipe(
    ofType(CryptocurrencyActions.GET_CRYPTOCURRENCY),
    map((action: CryptocurrencyActions.GetCryptoCurrency) => this.cryptocurrencyDetailsId = action.payload ),
    withLatestFrom(this.store.select('settings')),
    switchMap(([action, settingsState]) => {
      this.selectedCurrency = settingsState.selectedCurrency;
      return this.httpClient.get<any>(`http://localhost:4200/api/cryptocurrencies/${this.cryptocurrencyDetailsId}`, {
        observe: 'body',
        responseType: 'json'
      });
    }), map(
      (response) => {
        const cryptocurrencyDetails = {
            id: response.data[this.cryptocurrencyDetailsId].id,
            rank: response.data[this.cryptocurrencyDetailsId].cmc_rank,
            name: response.data[this.cryptocurrencyDetailsId].name,
            symbol: response.data[this.cryptocurrencyDetailsId].symbol,
            maxSupply: response.data[this.cryptocurrencyDetailsId].max_supply,
            totalSupply: response.data[this.cryptocurrencyDetailsId].total_supply,
            price: response.data[this.cryptocurrencyDetailsId].quote[this.selectedCurrency].price,
            marketCap: response.data[this.cryptocurrencyDetailsId].quote[this.selectedCurrency].market_cap,
            volume24: response.data[this.cryptocurrencyDetailsId].quote[this.selectedCurrency].volume_24h,
            percentChange1h: response.data[this.cryptocurrencyDetailsId].quote[this.selectedCurrency].percent_change_1h,
            percentChange7d: response.data[this.cryptocurrencyDetailsId].quote[this.selectedCurrency].percent_change_7d,
            percentChange24h: response.data[this.cryptocurrencyDetailsId].quote[this.selectedCurrency].percent_change_24h
        };

        return {
          type: CryptocurrencyActions.SET_CRYPTOCURRENCY,
          payload: cryptocurrencyDetails
        };
    })
  );

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromApp.AppState>) {
  }
};
