import { Component, OnInit } from '@angular/core';
import { StepService } from '../../step.service';

@Component({
  selector: 'app-preview-details',
  templateUrl: './preview-details.component.html',
  styleUrls: ['./preview-details.component.less']
})
export class PreviewDetailsComponent implements OnInit {
  step1 = {
    fullName: '',
    email: '',
    contactNumber: '',
    address: ''
  }
  step2 = {
    temperature: '',
    feeling: '',
    hasCough: false,
    hasCovidContact: false,
    additionalInfo: ''
  }
  allData = {
    step1 : this.step1,
    step2 : this.step2
  }
  
  constructor(private step: StepService) { }

  ngOnInit(): void {
    this.step.getStep1.subscribe((data:any)=> {
      this.allData.step1 = data
    })
    this.step.getStep2.subscribe((data:any) => {
      this.allData.step2 = data
    })
  }

}
