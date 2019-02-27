import { Action } from '@ngrx/store';

export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

export class UpdateCurrency implements Action {
  readonly type = UPDATE_CURRENCY;

  constructor(public payload: string) {}
}

export type SettingsActions = UpdateCurrency;
