import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CryptocurrencyDetails } from './cryptocurrency-details.model';

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit {
  id: number;
  cryptocurrency: CryptocurrencyDetails;

  selectedCurrency = 'USD';

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getCryptocurrency();
    });
  }

  getCryptocurrency = () => {
    this.httpClient.get(`http://localhost:4200/api/cryptocurrencies/${this.id}`).subscribe((response: any) => {
      console.log(response);
      this.cryptocurrency = {
          id: response.data[this.id].id,
          rank: response.data[this.id].cmc_rank,
          name: response.data[this.id].name,
          symbol: response.data[this.id].symbol,
          maxSupply: response.data[this.id].max_supply,
          totalSupply: response.data[this.id].total_supply,
          price: response.data[this.id].quote['USD'].price,
          marketCap: response.data[this.id].quote['USD'].market_cap,
          volume24: response.data[this.id].quote['USD'].volume_24h,
          percentChange1h: response.data[this.id].quote['USD'].percent_change_1h,
          percentChange7d: response.data[this.id].quote['USD'].percent_change_7d,
          percentChange24h: response.data[this.id].quote['USD'].percent_change_24h,
      };
    });
  }
}
