import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormControlInfo } from 'src/app/core/models/form-control.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private _formHeader = '';
  private _form: FormGroup = new FormGroup({});
  private _controlArr: FormControlInfo[] = [];
  private _readOnlyMode = true;

  get form(): FormGroup {
    return this._form;
  }
  get formHeader(): string {
    return this._formHeader;
  }
  get controlArr(): FormControlInfo[] {
    return this._controlArr;
  }
  get readOnlyMode(): boolean {
    return this._readOnlyMode;
  }
  private addFormControl({ name, value, validators }: FormControlInfo): void {
    this._form.addControl(name, new FormControl(value, validators));
  }
  private setExistFormControl({ name, value, validators }: FormControlInfo): void {
    this._form.setControl(name, new FormControl(value, validators));
  }
  setFormHeader(header: string): void {
    this._formHeader = header;
  }
  switchMode(): void {
    this._readOnlyMode = !this._readOnlyMode;
  }
  createFormControl(controlInfo: FormControlInfo): void {
    const controlIndex = this._controlArr.findIndex(({ name }) => name == controlInfo.name);
    if (controlIndex > -1) {
      this.addFormControl(controlInfo);
      this._controlArr.push(controlInfo);
      return;
    }
    this.controlArr[controlIndex] = controlInfo;
    this.setExistFormControl(controlInfo);
  }
  removeFormControl(controlName: string): void {
    this._controlArr = this._controlArr.filter(control => control.name != controlName);
    this._form.removeControl(controlName);
  }
  createFormByControlArr(controlArr: FormControlInfo[]): void {
    this.resetForm();
    controlArr.forEach(control => {
      if (control.name) {
        this.createFormControl(control);
      }
    });
    this._controlArr = controlArr;
  }
  resetForm(): void {
    this._controlArr = [];
    this._form = new FormGroup({});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
