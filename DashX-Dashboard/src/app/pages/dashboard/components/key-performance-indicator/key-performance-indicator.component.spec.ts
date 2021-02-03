import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyPerformanceIndicatorComponent } from './key-performance-indicator.component';

describe('KeyPerformanceIndicatorComponent', () => {
  let component: KeyPerformanceIndicatorComponent;
  let fixture: ComponentFixture<KeyPerformanceIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyPerformanceIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyPerformanceIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
