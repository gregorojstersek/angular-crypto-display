import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  selectedCurrency = 'USD';

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCryptoCurrencies();
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
