import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';

export enum AppName {
  FirstApp = 'firstApp',
  LastestApp = 'lastestApp'
}

export interface AppConfiguration {
  name: AppName;
  routing: string;
}

export const AppRouting: Record<AppName, Routes> = {
  [AppName.FirstApp]: [
    {
      path: 'home',
      loadChildren: () => import('@fhios/home').then((m) => m['HomePageModule']),
    },
    {
      path: 'cryptos-list',
      loadChildren: () => import('@fhios/cryptos-list').then((m) => m['CryptosListModule']),
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
  ]
}

export interface RouteFromApi {
  path: string;
  module?: string;
  shortcut?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor(
    private router: Router,
  ) { }

  setRoutes(): Promise<void> {
    return new Promise(resolve => {
      this.router.resetConfig(AppRouting.firstApp)
      resolve()
    })
  }
}
