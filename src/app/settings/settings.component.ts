import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromApp from '../store/app.reducers';
import * as fromSettings from './store/settings.reducers';
import * as SettingsActions from './store/settings.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  currencies = [
    'USD',
    'EUR',
    'CNY'
  ];

  settingsState: Observable<fromSettings.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.settingsState = this.store.select('settings');
  }

  onCurrencyChanged = (newCurrency: string) => {
    this.store.dispatch(new SettingsActions.UpdateCurrency(newCurrency));
  }

}
