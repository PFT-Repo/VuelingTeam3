import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullVsPartComponent } from './full-vs-part.component';

describe('FullVsPartComponent', () => {
  let component: FullVsPartComponent;
  let fixture: ComponentFixture<FullVsPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullVsPartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FullVsPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
