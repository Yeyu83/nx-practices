import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BinanceService {
  constructor(
    private http: HttpClient
  ) { }

  getCryptos(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>('https://api2.binance.com/api/v3/ticker/24hr')
  }
}
