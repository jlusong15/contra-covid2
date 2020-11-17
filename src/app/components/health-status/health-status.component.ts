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
      feeling: [data?data.feeling:'', [Validators.required, Validators.email]],
      hasCough: [data?data.hasCough:'', Validators.required],
      hasCovidContact: [data?data.hasCovidContact:'', Validators.required],
      additionalInfo: [data?data.additionalInfo:'', Validators.required],
    });
  }

  handleCheckValid() {
    console.log('asdasd')
  }

  ngOnInit(): void {
    console.log(this.step2)
    this.step.getStep2.subscribe(data => {
      this.step2Form = this.createFormGroup(data)
    })
    // console.log(this.step.getCurrentStep)
    // this.isInvalid = !this.step2Form.valid
  }

  ngDoCheck() {
    console.log('ngDoCheck', this.step2Form.value)
    this.step.updateStep2(this.step2Form.value)
    // this.step.updateCurrentStep(this.step2Form.valid ? this.currentStep + 1 : this.currentStep)
    // this.isInvalid = !this.step2Form.valid
  }

}
