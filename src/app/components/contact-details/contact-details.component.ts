import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepService } from '../../step.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.less']
})
export class ContactDetailsComponent implements OnInit {

  step1Form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contactNumber: ['', Validators.required],
    address: ['', Validators.required],
  });

  step2Form = this.fb.group({
    temperature:  ['', Validators.required],
    feeling: ['well'],
    hasCough: ['no'],
    hadCovidContact: ['no'],
    additionalInfo: [null]
  });

  currentStep = 1

  isInvalid = false

  constructor(private fb: FormBuilder, private step: StepService) { }

  handleCheckValid() {
    console.log('asdasd')
  }

  ngOnInit(): void {
    this.currentStep = 1
    console.log(this.step1Form.valid)
    // this.isInvalid = !this.step1Form.valid
  }

  ngDoCheck() {
    console.log('ngDoCheck', this.step1Form.value)
    this.step.updateStep1(this.step1Form.value)
    this.isInvalid = !this.step1Form.valid
  }

}
