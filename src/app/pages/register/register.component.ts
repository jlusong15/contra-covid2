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

  constructor(private rList : RegisterService) {};

  ngOnInit(): void {
    // this.rList.getProfileForm.subscribe(data => this.profileForm = data)
    // this.rList.getRegisterList.subscribe(data => this.getRegisterList = data)
  }

}
