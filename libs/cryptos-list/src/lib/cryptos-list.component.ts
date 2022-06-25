import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Crypto } from '@fhios/model';
import { GET_CRYPTOS_INJECTION_TOKEN, GET_CRYPTOS_PROVIDER } from '@fhios/provider';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './cryptos-list.component.html',
  styleUrls: ['./cryptos-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [GET_CRYPTOS_PROVIDER]
})
export class CryptosListComponent {
  constructor(
    @Inject(GET_CRYPTOS_INJECTION_TOKEN) readonly cryptos$: Observable<Crypto[]>
  ) { }

  logItem(item: Crypto): void {
    console.log(item)
  }
}
