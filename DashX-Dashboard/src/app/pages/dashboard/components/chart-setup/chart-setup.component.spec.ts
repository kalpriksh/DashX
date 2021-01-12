import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartSetupComponent } from './chart-setup.component';

describe('ChartSetupComponent', () => {
  let component: ChartSetupComponent;
  let fixture: ComponentFixture<ChartSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
