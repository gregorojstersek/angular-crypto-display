import * as CryptocurrencyActions from './cryptocurrency.actions';
import { Cryptocurrency } from '../cryptocurrency.model';

export interface State {
  cryptocurrencies: Cryptocurrency[];
}

const initialState: State = {
  cryptocurrencies: []
};

export function cryptocurrencyReducer(state = initialState, action: CryptocurrencyActions.CryptocurrencyActions) {
  switch (action.type) {
    case CryptocurrencyActions.SET_CRYPTOCURRENCIES:
      return {
        ...state,
        cryptocurrencies: [...action.payload]
      };
    default:
      return state;
  }
}
