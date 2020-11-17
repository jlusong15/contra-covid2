import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { StepService } from '../../step.service';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.less']
})
export class HealthStatusComponent implements OnInit {
  step2 = {}
  currentStep = 2
  isDirty = -1
  isInvalid = false
  step2Form = this.fb.group({ });
  isAdditionalInfoShow = false

  constructor(private fb: FormBuilder, private step: StepService) { }
  
  createFormGroup(data:any) {
    return this.fb.group({
      temperature: [data && data.temperature || '', Validators.required],
      feeling: [data && data.feeling || 'well'],
      hasCough: [data && data.hasCough ||  'no'],
      hasCovidContact: [data && data.hasCovidContact || 'no'],
      additionalInfo: [data && data.additionalInfo || ''],
    });
  }

  handleCovidContactChange({ target : { value } }) {
    this.step2Form.patchValue({hasCovidContact : value})
    this.isAdditionalInfoShow = value !== 'no'
    if (value === 'no') {
      this.step2Form.patchValue({additionalInfo : ''})
    }
  }

  handleFeelingChange({ target : { value } }) {
    this.step2Form.patchValue({feeling : value})
  }

  handleHasCoughChange({ target : { value } }) {
    this.step2Form.patchValue({hasCough : value})
  }

  handleReset() {
    this.step.updateCurrentStep(1)
  }

  ngOnInit(): void {
    this.step.getStep2.subscribe(data => {
      this.step2Form = this.createFormGroup(data)
    })
  }

  ngDoCheck() {
    this.isDirty++
    if (this.isDirty > 0) {
      this.step2Form.markAllAsTouched();
    }
    this.isInvalid = !this.step2Form.valid
    this.step.updateStep2ValidStat(this.isInvalid)
    if (!this.isInvalid) {
      console.log(this.step2Form.value)
      this.step.updateStep2(this.step2Form.value)
    }
    if (this.step.resetForm) {
      this.step2Form.reset()
      this.step.updateCurrentStep(1)
    }

    if (this.step2Form.controls['hasCovidContact'].value === 'yes') {
      this.isAdditionalInfoShow = true
    }
  }

}
