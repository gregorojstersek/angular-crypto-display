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
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CryptocurrencyInterceptor } from './cryptocurrencies/cryptocurrency.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { CryptocurrencyEffects } from './cryptocurrencies/store/cryptocurrency.effects';

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
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CryptocurrencyEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CryptocurrencyInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
