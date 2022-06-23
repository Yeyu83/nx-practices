import { BitcoinService } from '@fhios/data';
import { InjectionToken } from '@angular/core';
import { Bpi } from '@fhios/model';
import { Observable } from 'rxjs';

export const BPI_INJECTION_TOKEN = new InjectionToken<Observable<Bpi>>('[BitcoinService | bpi$]')

export const BPI_PROVIDER = {
  provide: BPI_INJECTION_TOKEN,
  deps: [BitcoinService],
  useFactory: bpiFactory,
}

export function bpiFactory(bitcoinService: BitcoinService): Observable<Bpi> {
  return bitcoinService.getBpi();
}
