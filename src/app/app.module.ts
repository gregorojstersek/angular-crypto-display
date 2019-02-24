import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { SettingsComponent } from './settings/settings.component';
import { CryptocurrencyComponent } from './cryptocurrencies/cryptocurrency/cryptocurrency.component';
import { CryptocurrenciesInterceptor } from './cryptocurrencies/cryptocurrencies.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CryptocurrenciesComponent,
    SettingsComponent,
    CryptocurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CryptocurrenciesInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
