import { ActionReducerMap } from '@ngrx/store';

import * as fromSettings from '../settings/store/settings.reducers';
import * as fromCryptocurrency from '../cryptocurrencies/store/cryptocurrency.reducers';

export interface AppState {
  settings: fromSettings.State;
  cryptocurrency: fromCryptocurrency.State;
}

export const reducers: ActionReducerMap<AppState> = {
  settings: fromSettings.settingsReducer,
  cryptocurrency: fromCryptocurrency.cryptocurrencyReducer
};
