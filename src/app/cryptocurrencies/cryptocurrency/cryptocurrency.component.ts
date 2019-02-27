import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CryptocurrencyDetails } from './cryptocurrency-details.model';
import * as fromApp from '../../store/app.reducers';
import * as fromSettings from '../../settings/store/settings.reducers';
import * as fromCryptocurrency from '../store/cryptocurrency.reducers';
import * as CryptocurrencyActions from '../store/cryptocurrency.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit {
  id: number;
  cryptocurrency = new CryptocurrencyDetails();

  settingsState: Observable<fromSettings.State>;
  cryptocurrencyState: Observable<fromCryptocurrency.State>;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.store.dispatch(new CryptocurrencyActions.SetCryptoCurrencyId(this.id));
      this.getCryptocurrency();
    });

    this.settingsState = this.store.select('settings');
    this.cryptocurrencyState = this.store.select('cryptocurrency');
  }

  getCryptocurrency = () => {
    this.store.dispatch(new CryptocurrencyActions.GetCryptoCurrency(this.id));
  }
}
