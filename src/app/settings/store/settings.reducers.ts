import * as SettingsActions from './settings.actions';

export interface State {
  selectedCurrency: string;
}

const initialState: State = {
  selectedCurrency: 'USD'
};

export function settingsReducer(state = initialState, action: SettingsActions.SettingsActions) {
  switch (action.type) {
    case SettingsActions.UPDATE_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload
      };
    default:
      return state;
  }
}
