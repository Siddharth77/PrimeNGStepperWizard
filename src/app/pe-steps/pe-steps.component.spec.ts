import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeStepsComponent } from './pe-steps.component';

describe('PeStepsComponent', () => {
  let component: PeStepsComponent;
  let fixture: ComponentFixture<PeStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
