import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraResolutionChartComponent } from './camera-resolution-chart.component';

describe('CameraResolutionChartComponent', () => {
  let component: CameraResolutionChartComponent;
  let fixture: ComponentFixture<CameraResolutionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraResolutionChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraResolutionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
