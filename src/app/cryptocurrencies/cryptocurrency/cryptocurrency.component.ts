import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CryptocurrencyDetails } from './cryptocurrency-details.model';
import * as fromApp from '../../store/app.reducers';
import * as fromSettings from '../../settings/store/settings.reducers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit {
  id: number;
  cryptocurrency: CryptocurrencyDetails;

  settingsState: Observable<fromSettings.State>;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getCryptocurrency();
    });

    this.settingsState = this.store.select('settings');
  }

  getCryptocurrency = () => {
    this.store.select('settings').subscribe(
      settings => {
        this.httpClient.get(`http://localhost:4200/api/cryptocurrencies/${this.id}`).subscribe((response: any) => {
          this.cryptocurrency = {
            id: response.data[this.id].id,
            rank: response.data[this.id].cmc_rank,
            name: response.data[this.id].name,
            symbol: response.data[this.id].symbol,
            maxSupply: response.data[this.id].max_supply,
            totalSupply: response.data[this.id].total_supply,
            price: response.data[this.id].quote[settings.selectedCurrency].price,
            marketCap: response.data[this.id].quote[settings.selectedCurrency].market_cap,
            volume24: response.data[this.id].quote[settings.selectedCurrency].volume_24h,
            percentChange1h: response.data[this.id].quote[settings.selectedCurrency].percent_change_1h,
            percentChange7d: response.data[this.id].quote[settings.selectedCurrency].percent_change_7d,
            percentChange24h: response.data[this.id].quote[settings.selectedCurrency].percent_change_24h
          };
      });
    });
  }
}
