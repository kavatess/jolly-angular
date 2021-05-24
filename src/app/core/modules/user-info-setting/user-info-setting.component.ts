import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';
import { LOCAL_STORAGE_KEY } from 'src/app/app-constants';
import { AuthService } from 'src/app/blocks/auth/auth.service';
import { getNumberInputValidator } from 'src/app/shared/validators/number-input.validator';
import { getStringInputValidator } from 'src/app/shared/validators/string-input.validator';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-info-setting',
  templateUrl: './user-info-setting.component.html',
  styleUrls: ['./user-info-setting.component.scss']
})
export class UserInfoSettingComponent implements OnInit {
  situation = 0;
  userInfoForm: FormGroup = null;
  constructor(private localStorage: LocalStorageService, private authService: AuthService) { }

  getDefaultFormVal(): FormGroup {
    const userInfo: User = this.localStorage.retrieve(LOCAL_STORAGE_KEY.USER);
    return new FormGroup({
      _id: new FormControl(userInfo._id),
      name: new FormControl(userInfo.name, getStringInputValidator()),
      dateOfBirth: new FormControl(userInfo.dateOfBirth, getStringInputValidator()),
      address: new FormControl(userInfo.address, getStringInputValidator()),
      idNumber: new FormControl(userInfo.idNumber, getNumberInputValidator(1, 20)),
      phoneNumber: new FormControl(userInfo.phoneNumber, getNumberInputValidator(10, 11))
    });
  }

  resetForm(): void {
    this.situation = 0;
    this.userInfoForm = this.getDefaultFormVal();
  }

  ngOnInit(): void {
    this.resetForm();
  }

  goToModifyMode(): void {
    this.situation = 1;
  }

  submit(): void {
    if (this.userInfoForm.valid) {
      this.authService.updateUserInfo(this.userInfoForm.value).subscribe(_res => {
        this.authService.logout();
      });
    }
  }
}
