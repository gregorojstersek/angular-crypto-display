import { Action } from '@ngrx/store';
import { Cryptocurrency } from './../cryptocurrency.model';
import { CryptocurrencyDetails } from './../cryptocurrency/cryptocurrency-details.model';

export const SET_CRYPTOCURRENCIES = 'SET_CRYPTOCURRENCIES';
export const GET_CRYPTOCURRENCIES = 'GET_CRYPTOCURRENCIES';

export const SET_CRYPTOCURRENCY = 'SET_CRYPTOCURRENCY';
export const GET_CRYPTOCURRENCY = 'GET_CRYPTOCURRENCY';
export const SET_CRYPTOCURRENCY_ID = 'SET_CRYPTOCURRENCY_ID';

export class SetCryptoCurrencies implements Action {
  readonly type = SET_CRYPTOCURRENCIES;

  constructor(public payload: Cryptocurrency[]) {}
}

export class GetCryptoCurrencies implements Action {
  readonly type = GET_CRYPTOCURRENCIES;
}

export class SetCryptoCurrency implements Action {
  readonly type = SET_CRYPTOCURRENCY;

  constructor(public payload: CryptocurrencyDetails) {}
}

export class GetCryptoCurrency implements Action {
  readonly type = GET_CRYPTOCURRENCY;

  constructor(public payload: number) {}
}

export class SetCryptoCurrencyId implements Action {
  readonly type = SET_CRYPTOCURRENCY_ID;

  constructor(public payload: number) {}
}

export type CryptocurrencyActions = GetCryptoCurrencies | SetCryptoCurrencies | GetCryptoCurrency | SetCryptoCurrency | SetCryptoCurrencyId;
