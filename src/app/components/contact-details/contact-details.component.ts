import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepService } from '../../step.service';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit {

  step1 = {}
  
  currentStep = 1

  isInvalid = false

  constructor(private fb: FormBuilder, private step: StepService) { }

  step1Form = this.fb.group({ });

  createFormGroup(data:any) {
    return this.fb.group({
      fullName: [data?data.fullName:'', Validators.required],
      email: [data?data.email:'', [Validators.required, Validators.email]],
      contactNumber: [data?data.contactNumber:'', Validators.required],
      address: [data?data.address:'', Validators.required],
    });
  }

  handleCheckValid() {
    console.log('asdasd')
  }

  ngOnInit(): void {
    this.currentStep = 1
    // console.log(this.step1Form.valid)
    // this.step.getStep1.subscribe(data => this.step1 = data)
    console.log(this.step1)
    this.step.getStep1.subscribe(data => {
      this.step1Form = this.createFormGroup(data)
    })
    // console.log(this.step.getCurrentStep)
    // this.isInvalid = !this.step1Form.valid
  }

  ngDoCheck() {
    console.log('ngDoCheck', this.step1Form.value)
    this.step.updateStep1(this.step1Form.value)
    this.step.updateCurrentStep(this.step1Form.valid ? this.currentStep + 1 : this.currentStep)
    // this.isInvalid = !this.step1Form.valid
  }

}
