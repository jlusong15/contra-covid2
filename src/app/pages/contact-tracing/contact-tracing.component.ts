import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepService } from '../../step.service'

@Component({
  selector: 'app-contact-tracing',
  templateUrl: './contact-tracing.component.html',
  styleUrls: ['./contact-tracing.component.less']
})
export class ContactTracingComponent implements OnInit {

  // step1Form = this.fb.group({
  //   fullName: ['', Validators.required],
  //   email: ['', [Validators.required, Validators.email]],
  //   contactNumber: ['', Validators.required],
  //   address: ['', Validators.required],
  // });

  // step2Form = this.fb.group({
  //   temperature:  ['', Validators.required],
  //   feeling: ['well'],
  //   hasCough: ['no'],
  //   hadCovidContact: ['no'],
  //   additionalInfo: [null]
  // });

  step1 = {}

  currentStep = 1

  isInvalid = false

  constructor(private fb: FormBuilder, private step : StepService) { }

  handleCheckValid(isValid) {
    console.log('handleCheckValid', isValid)
  }

  handleNextClick(currentStep) {
    this.currentStep = currentStep + 1
    // console.log('step1', this.currentStep);
    // console.log(this.step1Form)
  }

  handleBackClick(currentStep) {
    this.currentStep = this.currentStep - 1
    // console.log('step1', this.currentStep);
  }

  ngOnInit(): void {
    this.currentStep = 1
    this.step.getStep1.subscribe(data => this.step1 = data)
    this.step.getCurrentStep.subscribe(data => this.currentStep = data)
    // this.isInvalid = !this.step1Form.valid
  }

}
