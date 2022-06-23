import { HostBinding, Input, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';

enum DisplayEnum {
  Flex = 'flex',
  None = 'none'
}

@Component({
  selector: 'fhios-spinner',
  template: `
    <small *ngIf="header"><b>{{ header }}</b></small>
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
  @HostBinding('style.display') private display: DisplayEnum = DisplayEnum.None

  @Input() public header = ''

  constructor(
    protected spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.spinnerService.pollingState.subscribe(isFetching => {
      this.display = isFetching ? DisplayEnum.Flex : DisplayEnum.None
    })
  }
}
