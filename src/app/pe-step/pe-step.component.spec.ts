import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeStepComponent } from './pe-step.component';

describe('PeStepComponent', () => {
  let component: PeStepComponent;
  let fixture: ComponentFixture<PeStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
