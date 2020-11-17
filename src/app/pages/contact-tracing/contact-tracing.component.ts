import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepService } from '../../step.service'
import { Location } from '@angular/common';

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

  handleCheckValid(isValid) {
    console.log('handleCheckValid', isValid)
  }

  handleNextClick() {
    this.step.getCurrentStep.subscribe(step => this.currentStep = step)
    this.currentStep = this.currentStep + 1
    console.log("next", this.currentStep);
    this.step.updateCurrentStep(this.currentStep)
  }

  handleBackClick() {
    this.step.getCurrentStep.subscribe(step => this.currentStep = step)
    this.currentStep = this.currentStep - 1
    console.log("back", this.currentStep);
    this.step.updateCurrentStep(this.currentStep)
  }

  handleReset() {
    console.log("reset")
    this.step.updateCurrentStep(1)
  }

  goBackHome() {
    console.log("home")
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
