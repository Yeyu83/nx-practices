import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BpiListComponent } from './bpi-list/bpi-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BpiListComponent],
  exports: [BpiListComponent],
})
export class UiModule {}
