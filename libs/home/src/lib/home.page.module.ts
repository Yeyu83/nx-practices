import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home.page.component';
import { RouterModule, Routes } from '@angular/router';
import { UiModule } from '@fhios/ui';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomePageComponent],
  exports: [HomePageComponent, RouterModule],
})
export class HomePageModule {}
