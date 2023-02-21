import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFilterComponent } from './chart-filter.component';

describe('ChartFilterComponent', () => {
  let component: ChartFilterComponent;
  let fixture: ComponentFixture<ChartFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChartFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
