import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { finalize, tap } from 'rxjs/operators'
import { POLLING_URLS } from './spinner.module'
import { SpinnerService } from './spinner.service'

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(
    private readonly spinnerService: SpinnerService,
    @Inject(POLLING_URLS) readonly pollingUrls: string[]
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(() => {
        if (this.pollingUrls.includes(request.url)) {
          this.spinnerService.isPolling.next(true)
        }
      }),
      finalize(() => this.spinnerService.isPolling.next(false)),
    )
  }
}
