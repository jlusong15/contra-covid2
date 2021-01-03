import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.less']
})
export class RegistrationFormComponent implements OnInit {
  
  familyList = [];
  regListForm = this.createFormGroup({});
  isEditMode = false;
  activeIndex = -1;
  alert = {
    title: '',
    message : '',
    button : 'OK'
  }

  constructor(private fBuilder: FormBuilder, private rList : RegisterService) { }

  addToList() {
    let val = (this.regListForm.get('newInput').value) ? this.regListForm.get('newInput').value.trim() : null;
    if (val) {
      this.familyList.push({
        id : this.familyList.length,
        name: this.regListForm.get('newInput').value,
        isEdit: false
      })
      this.updateInputValue();
    }
  }

  updateItem(){
    this.familyList[this.activeIndex].name = this.regListForm.get('newInput').value;
    this.updateEditMode(false, this.activeIndex);
    this.updateInputValue();
  }

  removeFromList(item, index){
    if (this.isEditMode) {
      return false
    }
    this.familyList.splice(index, 1)
  }

  editFromList(item, index){
    if (this.isEditMode) {
      return false
    }
    this.updateEditMode(true, index);
    this.activeIndex = index;
    this.updateInputValue(item.name)
  }

  cancelUpdate(){
    this.updateEditMode(false, this.activeIndex);
    this.activeIndex = -1;
    this.updateInputValue();
  }

  updateInputValue(val = ''){
    this.regListForm.get('newInput').patchValue(val)
  }

  createFormGroup(data:any) {
    return this.regListForm = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      newInput: new FormControl()
    });
  }

  updateEditMode(val, index = -1){
    this.isEditMode = val;
    if (index >= 0) {
      this.familyList[index].isEdit = val;
    }
  }

  submitList() {
    if (this.familyList.length === 0 || this.regListForm.status === "INVALID") {
      this.showError();
    } else {
      this.showSuccess();
      this.rList.reset();
      this.regListForm.reset()
    }
  }

  showError(){
    this.alert = {
      title: 'ERROR',
      message: 'Make sure you provided the valid information.',
      button: 'BACK'
    }
  }

  showSuccess(){
    this.alert = {
      title: 'SUCCESS',
      message: 'Your information was successfully sent! Will notify you via email for any updates.',
      button: 'OK'
    }
  }

  ngOnInit(): void {
    this.rList.getRegisterList.subscribe(data => this.familyList = data)
  }

  ngDoCheck() : void {
    this.rList.updateProfile(this.regListForm.value)
    this.rList.updateRegList(this.familyList)
    
  }

}
