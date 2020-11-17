import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private step1  = new BehaviorSubject<object>({
    fullname: '',
    email: '',
    contactNumber:'',
    address: '',
  })

  private currentStep  = new BehaviorSubject<number>(1)

  public getStep1 = this.step1.asObservable();
  public getCurrentStep = this.currentStep.asObservable();

  constructor() { }

  updateStep1(step1) {
    this.step1.next(step1)
  }

  updateCurrentStep(step){
    this.currentStep.next(step)
  }
}
