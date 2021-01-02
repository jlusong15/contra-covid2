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

  constructor(private fBuilder: FormBuilder, private rList : RegisterService) {
    this.regListForm = new FormGroup({
      fullname: new FormControl(),
      email: new FormControl(),
      newInput: new FormControl()
    });
  }

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
    this.familyList.splice(index, 1)
    console.log(this.familyList)
  }

  editFromList(item, index){
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
    return this.fBuilder.group({
      fullname: [data && data.fullname || '', Validators.required],
      email: [data && data.email || '', Validators.email && Validators.required],
      newInput: [data && data.newInput || '', Validators.required]
    });
  }

  updateEditMode(val, index = -1){
    this.isEditMode = val;
    if (index >= 0) {
      this.familyList[index].isEdit = val;
    }
  }

  submitList() {
    console.log("this.familyList", this.familyList)
  }

  ngOnInit(): void {
    // console.log("this.rList.getProfileForm",this.rList.getProfileForm)
  }

}
