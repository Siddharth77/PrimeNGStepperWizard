import { Component, Input } from '@angular/core';
import {ButtonModule} from 'primeng/components/button/button';
import {StepsModule} from 'primeng/components/steps/steps';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-pe-step',
  templateUrl: './pe-step.component.html',
  styleUrls: ['./pe-step.component.css']
})

@NgModule({
  imports: [
    ButtonModule,
    StepsModule
  ],
})
export class PeStepComponent {
  @Input() styleClass: string;
  @Input() label: string;
  active: boolean = false;
}
