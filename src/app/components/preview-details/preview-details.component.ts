import { Component, OnInit } from '@angular/core';
import { StepService } from '../../step.service';

@Component({
  selector: 'app-preview-details',
  templateUrl: './preview-details.component.html',
  styleUrls: ['./preview-details.component.less']
})
export class PreviewDetailsComponent implements OnInit {
  allData = {
    step1 : {},
    step2 : {}
  }
  constructor(private step: StepService) { }

  ngOnInit(): void {
    this.step.getStep1.subscribe(data => {
      this.allData.step1 = data
    })
    this.step.getStep2.subscribe(data => {
      this.allData.step2 = data
    })
    console.log("allData", this.allData)
  }

}
