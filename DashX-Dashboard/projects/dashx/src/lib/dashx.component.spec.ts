import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashxComponent } from './dashx.component';

describe('DashxComponent', () => {
  let component: DashxComponent;
  let fixture: ComponentFixture<DashxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
