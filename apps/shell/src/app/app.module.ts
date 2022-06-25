import { RouterModule } from '@angular/router';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@fhios/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@fhios/layout';
import { SpinnerModule } from '@fhios/spinner';
import { ConfigurationService } from '@fhios/configuration';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    LayoutModule,
    CoreModule,
    SpinnerModule.forRoot(['https://api2.binance.com/api/v3/ticker/24hr']),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (configurationService: ConfigurationService) => (
        () => {
          return configurationService.setRoutes()
        }
      ),
      multi: true,
      deps: [ConfigurationService],
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
