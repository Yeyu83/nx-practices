import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isPolling = new Subject<boolean>()

  public get pollingState(): Observable<boolean> {
    return this.isPolling.asObservable()
  }
}
