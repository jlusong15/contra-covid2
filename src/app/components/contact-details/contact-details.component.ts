import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StepService } from '../../services/step.service';
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
  step1Form = this.FormBuilder.group({ });

  constructor(private FormBuilder: FormBuilder, private step: StepService) {
    this.step1Form = this.FormBuilder.group({ });
  }
  
  createFormGroup(data:any) {
    return this.FormBuilder.group({
      fullName: [data && data.fullName || '', Validators.required],
      email: [data && data.email || '', [Validators.required, Validators.email]],
      contactNumber: [data && data.contactNumber || '', Validators.required],
      address: [data && data.address || '', Validators.required],
    });
  }

  ngOnInit(): void {
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
