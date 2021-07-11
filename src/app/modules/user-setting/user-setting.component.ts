import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormComponent } from 'src/app/shared/components/form/form.component';
import { NavElement } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { FormControlInfo, NumberControlInfo, PasswordControlInfo, TextControlInfo } from 'src/app/models/form-control.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.scss']
})
export class UserSettingComponent implements OnInit {
  situation = 0;
  navArr: NavElement[] = [
    { tabIndex: 0, content: 'Thông tin cá nhân' },
    { tabIndex: 2, content: 'Thay đổi mật khẩu' },
  ]
  userInfo: User = this.authService.getUserInfo();
  controlArr: FormControlInfo[] = [];
  @ViewChild(FormComponent) formComp!: FormComponent;

  constructor(private authService: AuthService) { }

  private readonly userInfoControlArr: FormControlInfo[] = [
    new TextControlInfo({
      label: 'Tên',
      name: 'name',
      defaultVal: this.userInfo.name
    }),
    new TextControlInfo({
      label: 'Ngày sinh',
      name: 'dateOfBirth',
      defaultVal: this.userInfo.dateOfBirth
    }),
    new TextControlInfo({
      label: 'Địa chỉ',
      name: 'address',
      defaultVal: this.userInfo.address
    }),
    new NumberControlInfo({
      label: 'Số CMND/CCCD',
      name: 'idNumber',
      defaultVal: this.userInfo.idNumber,
      maxLength: 20
    }),
    new NumberControlInfo({
      label: 'Số điện thoại liên hệ',
      name: 'phoneNumber',
      defaultVal: this.userInfo.phoneNumber,
      minLength: 10,
      maxLength: 13,
    })
  ];

  private readonly changePasswordControlArr: FormControlInfo[] = [
    new PasswordControlInfo({
      label: 'Mật khẩu cũ',
      name: 'oldPassword'
    }),
    new PasswordControlInfo({
      label: 'Mật khẩu mới',
      name: 'newPassword'
    }),
    new PasswordControlInfo({
      label: 'Nhập lại mật khẩu mới',
      name: 'checkNewPassword'
    }),
  ];

  ngOnInit(): void {
    this.changeSituation(0)
  }

  changeSituation(situation: number): void {
    this.situation = situation;
    if (this.situation == 0) {
      this.controlArr = this.userInfoControlArr;
    }
    if (this.situation == 2) {
      this.controlArr = this.changePasswordControlArr;
    }
  }

  resetUserInfo(): void {
    this.formComp.resetForm();
    this.situation = 0;
  }

  updateUserInfo(): void {
    if (this.formComp.isValidForm()) {
      const submitJson = { _id: this.userInfo._id, ...this.formComp.getFormVal() };
      this.authService.updateUserInfo(submitJson);
    }
  }

  async changePassword() {
    if (this.formComp.isValidForm()) {
      try {
        const { oldPassword, newPassword, checkNewPassword } = this.formComp.getFormVal();
        if (newPassword != checkNewPassword) {
          throw new Error('2 mật khẩu thay đổi không trùng khớp. Xin vui lòng nhập lại.');
        }
        const submitJson = { phoneNumber: this.userInfo.phoneNumber, oldPassword, newPassword };
        await this.authService.changePassword(submitJson).toPromise().then(response => {
          if (!response.matchedCount) {
            throw new Error('Mật khẩu cũ không đúng. Xin vui lòng nhập lại.');
          }
          this.authService.logout();
        });
      } catch (err) {
        alert(err.message);
        return this.formComp.resetForm();
      }
    }
  }
}
