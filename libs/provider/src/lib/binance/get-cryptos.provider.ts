import { BinanceService } from '@fhios/data';
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Crypto } from '@fhios/model';

export const GET_CRYPTOS_INJECTION_TOKEN = new InjectionToken<Observable<Crypto[]>>('[BitcoinService | getCryptos]')

export const GET_CRYPTOS_PROVIDER = {
  provide: GET_CRYPTOS_INJECTION_TOKEN,
  deps: [BinanceService],
  useFactory: (binanceService: BinanceService) => {
    return binanceService.getCryptos()
  },
}
