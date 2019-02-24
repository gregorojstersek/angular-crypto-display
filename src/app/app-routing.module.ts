import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { SettingsComponent } from './settings/settings.component';
import { CryptocurrencyComponent } from './cryptocurrencies/cryptocurrency/cryptocurrency.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'cryptocurrencies', pathMatch: 'full' },
  { path: 'cryptocurrencies', component: CryptocurrenciesComponent },
  { path: 'cryptocurrencies/:id', component: CryptocurrencyComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
