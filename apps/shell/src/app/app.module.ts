import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from '@fhios/ui';
import { LayoutModule } from '@fhios/layout';
import { SpinnerModule } from '@fhios/spinner';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    UiModule,
    LayoutModule,
    SpinnerModule.forRoot([
      'https://api2.binance.com/api/v3/ticker/24hr'
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
