import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { reducers } from '../store/app.reducers';
import { StoreModule } from '@ngrx/store';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([{ path: 'settings', component: SettingsComponent }]),
        FormsModule,
        StoreModule.forRoot(reducers)
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the settings component', () => {
    expect(component).toBeTruthy();
  });

  it('should make initial selectedCurrency value USD', fakeAsync(() => {
      tick(5000);
      component.settingsState.subscribe(settingsState => expect(settingsState.selectedCurrency).toBe('USD'));
  }));

  it('should change selectedCurrency value to EUR', fakeAsync(() => {
    component.onCurrencyChanged('EUR');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      tick(5000);
      component.settingsState.subscribe(settingsState => expect(settingsState.selectedCurrency).toBe('EUR'));
    });

  }));
});
