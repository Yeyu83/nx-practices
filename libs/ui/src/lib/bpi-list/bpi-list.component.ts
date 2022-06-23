import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Bpi, Currency } from '@fhios/model';

@Component({
  selector: 'fhios-bpi-list',
  templateUrl: './bpi-list.component.html',
  styleUrls: ['./bpi-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BpiListComponent {
  @Input() bpi!: Bpi

  @Output() itemClicked = new EventEmitter<Currency>()
}
