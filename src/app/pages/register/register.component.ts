import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  currentStep = 1;
  profileForm = {}
  getRegisterList = []
  alert = {
    message : '',
    button : 'OK'
  }

  constructor(private rList : RegisterService) {};

  submitList() {
    console.log("this.rList.getProfileForm", this.profileForm)
    console.log("this.rList.getRegisterList", this.getRegisterList)
    if (this.getRegisterList.length === 0) {
      this.showError();
    } else {
      this.showSuccess();
    }
  }

  showError(){
    this.alert = {
      message: 'Error values',
      button: 'OK'
    }
  }

  showSuccess(){
    this.alert = {
      message: 'Success',
      button: 'OK'
    }
  }

  ngOnInit(): void {
    this.rList.getProfileForm.subscribe(data => this.profileForm = data)
    this.rList.getRegisterList.subscribe(data => this.getRegisterList = data)

    // console.log("this.rList.getProfileForm",this.rList.getProfileForm)
  }

}
