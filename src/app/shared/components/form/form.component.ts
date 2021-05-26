import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormControlInfo } from 'src/app/models/form-control.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges {
  @Input() formHeader = '';
  @Input() controlArr: FormControlInfo[] = [];
  @Input() readOnlyMode = false;
  private _form: FormGroup = new FormGroup({});
  private _fileRepo: any[] = [];

  get form(): FormGroup {
    return this._form;
  }

  constructor() { }

  isValidForm(): boolean {
    return this._form.valid;
  }

  getFormValue(): any {
    return this._form.value;
  }

  getCtrlError(ctrlName: string): ValidationErrors | null {
    return this._form.get(ctrlName).errors;
  }

  isCtrlTouched(ctrlName: string): boolean {
    return this._form.get(ctrlName).touched;
  }

  resetForm(): void {
    this.controlArr.forEach(control => {
      this.form.controls[control.name].patchValue(control.defaultVal);
    });
    this.form.markAsUntouched();
  }

  ngOnChanges(): void {
    if (this.controlArr.length) {
      this._form = new FormGroup({});
      this.createFormByControlArr();
    }
  }

  private createFormByControlArr(): void {
    this.controlArr.map(({ name, defaultVal, validators }) => {
      if (name) {
        this._form.addControl(name, new FormControl(defaultVal, validators));
      }
    });
  }

  getFileByCtrlName(ctrlName: string): void {
    return this._fileRepo.find(fileEl => fileEl.controlName == ctrlName);
  }

  emitNewImg(ctrlName: string, imgFile: File): void {
    this.showPreviewImg(ctrlName, imgFile);
    this.addFileToRepo(ctrlName, imgFile);
  }

  private showPreviewImg(ctrlName: string, imgFile: File): void {
    var reader = new FileReader();
    reader.onload = function (e) {
      $(`img-${ctrlName}`).attr('src', e.target.result.toString());
      $(`img-${ctrlName}`).removeClass('d-none');
    }
    reader.readAsDataURL(imgFile);
  }

  private addFileToRepo(ctrlName: string, newFile: File): void {
    const fileIndex = this._fileRepo.findIndex(({ controlName }) => controlName == ctrlName);
    if (fileIndex > -1) {
      this._fileRepo[fileIndex].file = newFile;
      return;
    }
    const newFileEl = { controlName: ctrlName, file: newFile };
    this._fileRepo.push(newFileEl);
  }
}