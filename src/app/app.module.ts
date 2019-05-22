import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeStepsComponent } from './pe-steps/pe-steps.component';
import { PeStepComponent } from './pe-step/pe-step.component';

import { ButtonModule } from 'primeng/components/button/button';
import { StepsModule } from 'primeng/components/steps/steps';
import { FormsModule } from '@angular/forms';
import { GrowlModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    PeStepsComponent,
    PeStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    StepsModule,
    FormsModule,
    GrowlModule
  ],
  exports: [
    PeStepComponent,
    PeStepsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
