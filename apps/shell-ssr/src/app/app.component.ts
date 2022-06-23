import { Component, Inject } from '@angular/core';
import { Bpi, Currency } from '@fhios/model';
import { BPI_INJECTION_TOKEN, BPI_PROVIDER } from '@fhios/provider';
import { Observable } from 'rxjs';

@Component({
  selector: 'fhios-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BPI_PROVIDER]
})
export class AppComponent {
  constructor(
    @Inject(BPI_INJECTION_TOKEN) readonly bpi$: Observable<Bpi>
  ) { }

  logItem(item: Currency): void {
    console.log(item)
  }
}
