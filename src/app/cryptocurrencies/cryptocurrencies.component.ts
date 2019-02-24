import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as fromApp from '../store/app.reducers';
import * as fromSettings from '../settings/store/settings.reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.scss']
})
export class CryptocurrenciesComponent implements OnInit {

  cryptocurrencies = [
    {
      id: 1,
      name: 'Bitcoin',
      rank: 1,
      symbol: 'BTC',
      price: 4172.90224889,
      percentChange24h:  4.66602
    }
  ];

  settingsState: Observable<fromSettings.State>;

  constructor(private router: Router, private store: Store<fromApp.AppState>, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCryptoCurrencies();
    this.settingsState = this.store.select('settings');
  }

  getCryptoCurrencies = () => {
    // this.httpClient.get(`http://localhost:4200/api/cryptocurrencies`).subscribe((response: any) => {
    //   console.log(response);
    //   this.cryptocurrencies = response.data.map(cryptocurrency => {
    //     return {
    //       id: cryptocurrency.id,
    //       rank: cryptocurrency.cmc_rank,
    //       name: cryptocurrency.name,
    //       symbol: cryptocurrency.symbol,
    //       price: cryptocurrency.quote['USD'].price,
    //       percentChange24h: cryptocurrency.quote['USD'].percent_change_24h,
    //       };
    //   })
    // });
  }

  goToCryptocurrency = (id) => {
    this.router.navigate([`cryptocurrencies/${id}`]);
  }

}
