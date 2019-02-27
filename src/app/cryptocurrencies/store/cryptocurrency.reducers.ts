import * as CryptocurrencyActions from './cryptocurrency.actions';
import { Cryptocurrency } from '../cryptocurrency.model';
import { CryptocurrencyDetails } from './../cryptocurrency/cryptocurrency-details.model';

export interface State {
  cryptocurrencies: Cryptocurrency[];
  cryptocurrencyDetails: CryptocurrencyDetails;
  cryptocurrencyDetailsId: number;
}

const initialState: State = {
  cryptocurrencies: [],
  cryptocurrencyDetails: new CryptocurrencyDetails(),
  cryptocurrencyDetailsId: null
};

export function cryptocurrencyReducer(state = initialState, action: CryptocurrencyActions.CryptocurrencyActions) {
  switch (action.type) {
    case CryptocurrencyActions.SET_CRYPTOCURRENCIES:
      return {
        ...state,
        cryptocurrencies: [...action.payload]
      };

    case CryptocurrencyActions.SET_CRYPTOCURRENCY_ID:
      return {
        ...state,
        cryptocurrencyDetailsId: action.payload
      };

    case CryptocurrencyActions.SET_CRYPTOCURRENCY:
      return {
        ...state,
        cryptocurrencyDetails: {...action.payload}
      };
    default:
      return state;
  }
}
