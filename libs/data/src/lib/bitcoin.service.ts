import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Bpi, ApiResponse } from '@fhios/model';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  constructor(
    private http: HttpClient
  ) { }

  getBpi(): Observable<Bpi> {
    return this.http.get<ApiResponse>('https://api.coindesk.com/v1/bpi/currentprice.json')
      .pipe(
        map(response => response.bpi)
      )
  }
}
