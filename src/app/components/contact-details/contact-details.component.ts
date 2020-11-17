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
  isDirty = -1
  isInvalid = false
  step1Form = this.fb.group({ });

  constructor(private fb: FormBuilder, private step: StepService) { }
  
  createFormGroup(data:any) {
    return this.fb.group({
      fullName: [data && data.fullName || '', Validators.required],
      email: [data && data.email || '', [Validators.required, Validators.email]],
      contactNumber: [data && data.contactNumber || '', Validators.required],
      address: [data && data.address || '', Validators.required],
    });
  }

  handleCheckValid() {
    console.log('asdasd')
  }

  ngOnInit(): void {
    console.log(this.step1)
    this.step.getStep1.subscribe(data => {
      this.step1Form = this.createFormGroup(data)
    })
  }

  ngDoCheck() {
    this.isDirty++
    if (this.isDirty > 0) {
      this.step1Form.markAllAsTouched();
    }
    this.isInvalid = !this.step1Form.valid
    this.step.updateStep1ValidStat(this.isInvalid)
    if (!this.isInvalid) {
      this.step.updateStep1(this.step1Form.value)
    }
    if (this.step.resetForm) {
      this.step1Form.reset()
      this.step.reset(false)
    }
  }

}
