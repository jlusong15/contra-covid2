import { ArrayType } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private profileForm  = new BehaviorSubject<object>({
    fullname: '',
    email: '',
    newInput: ''
  })
  public getProfileForm = this.profileForm.asObservable();

  private registerList  = new BehaviorSubject<Array<any>>([]);
  public getRegisterList = this.registerList.asObservable();

  constructor() { }

  updateRegList(data){
    console.log("data", data)
    this.registerList.next(data)
  }
}