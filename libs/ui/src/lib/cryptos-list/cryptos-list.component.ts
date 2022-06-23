import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Crypto } from '@fhios/model';

@Component({
  selector: 'fhios-cryptos-list',
  templateUrl: './cryptos-list.component.html',
  styleUrls: ['./cryptos-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CryptosListComponent {
  @Input() cryptos: Crypto[] = []

  @Output() itemClicked = new EventEmitter<Crypto>()
}
