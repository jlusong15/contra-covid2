import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepService } from '../../step.service'

@Component({
  selector: 'app-contact-tracing',
  templateUrl: './contact-tracing.component.html',
  styleUrls: ['./contact-tracing.component.less']
})
export class ContactTracingComponent implements OnInit {

  step1 = {}
  currentStep = 1

  isInvalid = false

  constructor(private fb: FormBuilder, private step : StepService) { }

  handleNextClick() {
    if (this.currentStep < 3 && ((this.currentStep == 1 && !this.step.step1Invalid) || (this.currentStep == 2 && !this.step.step2Invalid))) {
      this.step.getCurrentStep.subscribe(step => this.currentStep = step)
      this.currentStep = this.currentStep + 1
      this.step.updateCurrentStep(this.currentStep)
    } else if (this.currentStep > 2) {
      this.step.getCurrentStep.subscribe(step => this.currentStep = step)
      this.currentStep = this.currentStep + 1
      this.step.updateCurrentStep(this.currentStep)
    }
  }

  handleBackClick() {
    this.step.getCurrentStep.subscribe(step => this.currentStep = step)
    this.currentStep = this.currentStep - 1
    this.step.updateCurrentStep(this.currentStep)
  }

  handleReset() {
    this.step.reset(true)
    this.step.updateCurrentStep(1)
  }


  ngOnInit(): void {
    this.currentStep = 1
    this.step.getStep1.subscribe(data => this.step1 = data)
    // this.isInvalid = !this.step1Form.valid
  }

  ngDoCheck() {
    // this.step.getStep1.subscribe(data => this.step1 = data)
  }

}
