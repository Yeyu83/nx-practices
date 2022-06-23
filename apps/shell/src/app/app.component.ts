import { Component, Inject } from '@angular/core';
import { Crypto } from '@fhios/model';
import { GET_CRYPTOS_INJECTION_TOKEN, GET_CRYPTOS_PROVIDER } from '@fhios/provider';
import { Observable } from 'rxjs';

@Component({
  selector: 'fhios-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GET_CRYPTOS_PROVIDER]
})
export class AppComponent {
  constructor(
    @Inject(GET_CRYPTOS_INJECTION_TOKEN) readonly cryptos$: Observable<Crypto[]>
  ) { }

  logItem(item: Crypto): void {
    console.log(item)
  }
}
