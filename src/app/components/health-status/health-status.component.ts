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
  isInvalid = false
  step2Form = this.fb.group({ });
  isAdditionalInfoShow = true

  constructor(private fb: FormBuilder, private step: StepService) { }
  
  createFormGroup(data:any) {
    return this.fb.group({
      temperature: [data?data.temperature:'', Validators.required],
      feeling: [data?data.feeling:''],
      hasCough: [data?data.hasCough:''],
      hasCovidContact: [data?data.hasCovidContact:''],
      additionalInfo: [data?data.additionalInfo:''],
    });
  }

  handleCheckValid() {
    console.log('asdasd')
  }

  handleReset() {
    console.log("rese2")
    // this.step1Form.reset();
    this.step.updateCurrentStep(1)
  }

  ngOnInit(): void {
    console.log(this.step2)
    this.step.getStep2.subscribe(data => {
      this.step2Form = this.createFormGroup(data)
    })
  }

  ngDoCheck() {
    this.isInvalid = !this.step2Form.valid
    this.step.updateStep2ValidStat(this.isInvalid)
    console.log("this.isInvalid", this.isInvalid)
    if (!this.isInvalid) {
      this.step.updateStep2(this.step2Form.value)
    }
    if (this.step.resetForm) {
      this.step2Form.reset()
      this.step.updateStep2(this.step2Form.value)
      this.step.updateCurrentStep(1)
    }
  }

}
