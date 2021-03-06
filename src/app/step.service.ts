import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private currentStep  = new BehaviorSubject<number>(1)
  public getCurrentStep = this.currentStep.asObservable();
  public step1Invalid = true
  public step2Invalid = true
  public resetForm = false

  private step1  = new BehaviorSubject<object>({
    fullName: '',
    email: '',
    contactNumber:'',
    address: '',
  })
  public getStep1 = this.step1.asObservable();

  private step2  = new BehaviorSubject<object>({
    temperature: '',
    feeling: false,
    hasCough: false,
    hasCovidContact: false,
    additionalInfo: ''
  })
  public getStep2 = this.step2.asObservable();

  constructor() { }

  updateStep1ValidStat(status) {
    this.step1Invalid = status
  }

  updateStep2ValidStat(status) {
    this.step2Invalid = status
  }

  updateStep1(step1) {
    this.step1.next(step1)
  }

  updateStep2(step2) {
    this.step2.next(step2)
  }

  updateCurrentStep(step){
    this.currentStep.next(step)
  }

  reset(status) {
    this.resetForm = status
    this.step1.next([])
    this.step2.next([])
  }
}
