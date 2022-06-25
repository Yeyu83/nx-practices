import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { UiModule } from "@fhios/ui"
import { CryptosListComponent } from "./cryptos-list.component"

const routes: Routes = [
  {
    path: '',
    component: CryptosListComponent,
  }
]

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CryptosListComponent],
  exports: [CryptosListComponent],
})
export class CryptosListModule {}
