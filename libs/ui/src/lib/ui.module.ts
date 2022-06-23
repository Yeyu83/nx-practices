import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptosListComponent } from './cryptos-list/cryptos-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CryptosListComponent],
  exports: [CryptosListComponent],
})
export class UiModule {}
