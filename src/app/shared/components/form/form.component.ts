import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormControlInfo } from 'src/app/models/form-control.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnChanges, OnDestroy {
  @Input() controlArr: FormControlInfo[] = [];
  @Input() errorAlert = true;
  @Input() readOnlyMode = false;
  @Output() onchange = new EventEmitter();
  form: FormGroup = new FormGroup({});
  private fileRepo: any[] = [];
  private subscription = new Subscription();

  constructor() { }

  isValidForm(): boolean {
    return this.form.valid;
  }
  getFormVal(): any {
    return this.form.value;
  }
  getCtrlVal(ctrlName: string): any {
    return this.form.value[ctrlName];
  }
  getCtrlError(ctrlName: string): ValidationErrors | null {
    return this.form.get(ctrlName).errors;
  }
  isCtrlTouched(ctrlName: string): boolean {
    return this.form.get(ctrlName).touched;
  }
  resetForm(): void {
    this.controlArr.forEach(control => {
      this.form.controls[control.name].patchValue(control.defaultVal);
    });
    this.form.markAsUntouched();
  }

  ngOnChanges(): void {
    if (this.controlArr.length) {
      this.form = new FormGroup({});
      this.createFormByControlArr();
    }
  }

  private emitFormChanges(): void {
    this.subscription = this.form.valueChanges.subscribe(formVal => {
      this.onchange.emit(formVal);
    })
  }

  private createFormByControlArr(): void {
    this.controlArr.map(({ name, defaultVal, validators }) => {
      if (name) {
        this.form.addControl(name, new FormControl(defaultVal, validators));
      }
    });
    this.emitFormChanges();
  }

  getFileByCtrlName(ctrlName: string): void {
    return this.fileRepo.find(fileEl => fileEl.controlName == ctrlName);
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
    const fileIndex = this.fileRepo.findIndex(({ controlName }) => controlName == ctrlName);
    if (fileIndex > -1) {
      this.fileRepo[fileIndex].file = newFile;
      return;
    }
    const newFileEl = { controlName: ctrlName, file: newFile };
    this.fileRepo.push(newFileEl);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}