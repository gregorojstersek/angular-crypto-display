import { Action } from '@ngrx/store';

export const UPDATE_CURRENCY = 'ADD_INGREDIENT';

export class UpdateCurrency implements Action {
  readonly type = UPDATE_CURRENCY;

  constructor(public payload: string) {}
}

export type SettingsActions = UpdateCurrency;
