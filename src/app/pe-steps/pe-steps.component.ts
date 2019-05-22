import { Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Input,
  Output } from '@angular/core';
import {MenuItem} from 'primeng/components/common/api';
import {PeStepComponent} from '../pe-step/pe-step.component';
import {ButtonModule} from 'primeng/components/button/button';
import {StepsModule} from 'primeng/components/steps/steps';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-pe-steps',
  templateUrl: './pe-steps.component.html',
  styleUrls: ['./pe-steps.component.css']
})

@NgModule({
  imports: [
    ButtonModule,
    StepsModule
  ],
})
export class PeStepsComponent implements AfterContentInit, OnChanges {
  @Input() activeIndex: number = 0;
  @Input() styleClass: string;
  @Input() stepClass: string;
  @Output() activeIndexChange: EventEmitter<any> = new EventEmitter();
  @Output() change = new EventEmitter();

  items: MenuItem[] = [];

  @ContentChildren(PeStepComponent) steps: QueryList<PeStepComponent>;
  constructor() { }

  ngAfterContentInit() {
    this.steps.toArray().forEach((step: PeStepComponent, index: number) => {
        if (!step.styleClass) {
            // set style class if it was not set on step component directly
            step.styleClass = this.stepClass;
        }

        if (index === this.activeIndex) {
            // show this step on init
            step.active = true;
        }

        this.items[index] = {
            label: step.label,
            command: (event: any) => {
                // hide all steps
                this.steps.toArray().forEach((s: PeStepComponent) => s.active = false);

                // show the step the user has clicked on.
                step.active = true;
                this.activeIndex = index;

                // emit currently selected index (two-way binding)
                this.activeIndexChange.emit(index);
                // emit currently selected label
                this.change.next(step.label);
            }
        };
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.steps) {
        // we could also check changes['activeIndex'].isFirstChange()
        return;
    }

    for (const prop in changes) {
        if (prop === 'activeIndex') {
            const curIndex = changes[prop].currentValue;
            this.steps.toArray().forEach((step: PeStepComponent, index: number) => {
                // show / hide the step
                const selected = index === curIndex;
                step.active = selected;

                if (selected) {
                    // emit currently selected label
                    this.change.next(step.label);
                }
            });
        }
    }
  }

  private previous() {
    this.activeIndex--;
    // emit currently selected index (two-way binding)
    this.activeIndexChange.emit(this.activeIndex);
    // show / hide steps and emit selected label
    this.ngOnChanges({
        activeIndex: {
            currentValue: this.activeIndex,
            previousValue: this.activeIndex + 1,
            firstChange: false,
            isFirstChange: () => false
        }
    });
  }

  private next() {
    this.activeIndex++;
    // emit currently selected index (two-way binding)
    this.activeIndexChange.emit(this.activeIndex);
    // show / hide steps and emit selected label
    this.ngOnChanges({
        activeIndex: {
            currentValue: this.activeIndex,
            previousValue: this.activeIndex - 1,
            firstChange: false,
            isFirstChange: () => false
        }
    });
  }
}
