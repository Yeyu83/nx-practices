import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './spinner.interceptor';
import { SpinnerComponent } from './spinner.component';

export const POLLING_URLS = new InjectionToken<string[]>('Routes mapped to check the polling state')

@NgModule({
  imports: [CommonModule],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
})
export class SpinnerModule {
  static forRoot(pollingUrls: string[] = []): ModuleWithProviders<SpinnerModule> {
    return {
      ngModule: SpinnerModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: SpinnerInterceptor,
          multi: true,
        },
        {
          provide: POLLING_URLS,
          useValue: pollingUrls
        },
      ],
    }
  }
}
