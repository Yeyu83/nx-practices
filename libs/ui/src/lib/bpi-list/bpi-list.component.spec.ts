import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpiListComponent } from './bpi-list.component';

describe('BpiListComponent', () => {
  let component: BpiListComponent;
  let fixture: ComponentFixture<BpiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BpiListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BpiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
