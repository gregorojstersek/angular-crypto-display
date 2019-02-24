import { Cryptocurrency } from '../cryptocurrency.model';

export class CryptocurrencyDetails extends Cryptocurrency {
  maxSupply: number;
  totalSupply: number;
  marketCap: number;
  volume24: number;
  percentChange1h: number;
  percentChange7d: number;
}
