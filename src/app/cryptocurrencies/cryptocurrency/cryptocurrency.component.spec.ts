import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CryptocurrencyComponent } from './cryptocurrency.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { reducers } from '../../store/app.reducers';
import { StoreModule } from '@ngrx/store';

describe('CryptocurrencyComponent', () => {
  let component: CryptocurrencyComponent;
  let fixture: ComponentFixture<CryptocurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CryptocurrencyComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([{ path: 'cryptocurrencies/:id', component: CryptocurrencyComponent }]),
        FormsModule,
        StoreModule.forRoot(reducers)
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptocurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the cryptocurrency component', () => {
    expect(component).toBeTruthy();
  });

  it('should make initial selectedCurrency value USD', fakeAsync(() => {
      tick(5000);
      component.settingsState.subscribe(settingsState => expect(settingsState.selectedCurrency).toBe('USD'));
  }));

});
