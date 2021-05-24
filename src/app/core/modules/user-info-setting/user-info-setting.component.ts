import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';
import { LOCAL_STORAGE_KEY } from 'src/app/app-constants';
import { getNumberInputValidator } from 'src/app/shared/validators/number-input.validator';
import { getStringInputValidator } from 'src/app/shared/validators/string-input.validator';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-info-setting',
  templateUrl: './user-info-setting.component.html',
  styleUrls: ['./user-info-setting.component.scss']
})
export class UserInfoSettingComponent implements OnInit {
  displayMode = true;
  userInfoForm: FormGroup = null;
  constructor(private localStorage: LocalStorageService) { }

  getDefaultFormVal(): FormGroup {
    const userInfo: User = this.localStorage.retrieve(LOCAL_STORAGE_KEY.USER);
    return new FormGroup({
      _id: new FormControl(userInfo._id),
      name: new FormControl(userInfo.name, getStringInputValidator()),
      dateOfBirth: new FormControl(userInfo.dateOfBirth, getStringInputValidator()),
      address: new FormControl(userInfo.address, getStringInputValidator()),
      idNumber: new FormControl(userInfo.idNumber, [getNumberInputValidator(), Validators.maxLength(20)]),
      phoneNumber: new FormControl(userInfo.phoneNumber, [getNumberInputValidator(), Validators.maxLength(11), Validators.minLength(10)])
    });
  }

  resetForm(): void {
    this.displayMode = true;
    this.userInfoForm = this.getDefaultFormVal();
  }

  ngOnInit(): void {
    this.resetForm();
  }

  goToModifyMode(): void {
    this.displayMode = false;
  }

  submit(): void {
    
  }
}
