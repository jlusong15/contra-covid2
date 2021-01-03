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

  constructor(private fBuilder: FormBuilder, private rList : RegisterService) { }

  addToList() {
    let val = this.regListForm.get('newInput').value.trim()
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
    // console.log(this.familyList)
  }

  editFromList(item, index){
    if (this.isEditMode) {
      return false
    }
    console.log(item, index)
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
      fullname: new FormControl(null, [Validators.required]),
      email: new FormControl('test', [Validators.required, Validators.email]),
      newInput: new FormControl()
    });
  }

  updateEditMode(val, index = -1){
    this.isEditMode = val;
    if (index >= 0) {
      this.familyList[index].isEdit = val;
    }
  }

  ngOnInit(): void {
    // console.log("this.rList.getProfileForm",this.rList.getProfileForm)
  }

  ngDoCheck() : void {
    console.log("test",this.regListForm)
    if (this.regListForm.status === "VALID") {
      this.rList.updateProfile(this.regListForm.value)
      this.rList.updateRegList(this.familyList)
    } else {
      this.rList.updateProfile({})
      this.rList.updateRegList([])
    }
    
  }

}
