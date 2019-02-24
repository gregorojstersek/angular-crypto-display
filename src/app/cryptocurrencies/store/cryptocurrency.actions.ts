import { Action } from '@ngrx/store';
import { Cryptocurrency } from './../cryptocurrency.model';

export const SET_CRYPTOCURRENCIES = 'SET_CRYPTOCURRENCIES';
export const GET_CRYPTOCURRENCIES = 'GET_CRYPTOCURRENCIES';

export class SetCryptoCurrencies implements Action {
  readonly type = SET_CRYPTOCURRENCIES;

  constructor(public payload: Cryptocurrency[]) {}
}

export class GetCryptoCurrencies implements Action {
  readonly type = GET_CRYPTOCURRENCIES;
}

export type CryptocurrencyActions = GetCryptoCurrencies | SetCryptoCurrencies;
