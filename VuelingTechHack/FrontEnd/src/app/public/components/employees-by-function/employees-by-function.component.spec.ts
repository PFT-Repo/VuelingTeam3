import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesByFunctionComponent } from './employees-by-function.component';

describe('EmployeesByFunctionComponent', () => {
  let component: EmployeesByFunctionComponent;
  let fixture: ComponentFixture<EmployeesByFunctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesByFunctionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeesByFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
