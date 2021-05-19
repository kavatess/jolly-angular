import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { RAW_TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { RawTruss } from 'src/app/core/models/truss.model';
import { RevertStatusService } from 'src/app/core/services/truss/revert-status.service';
import { UpdateMaxholeService } from 'src/app/core/services/truss/update-maxhole.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-modal-truss-setting',
  templateUrl: './modal-truss-setting.component.html',
  styleUrls: ['./modal-truss-setting.component.scss']
})
export class ModalTrussSettingComponent implements OnChanges {
  @Input() truss: RawTruss = null;
  @Output() updateEv = new EventEmitter();
  onLoad = false;
  statusIndex = -1;
  maxHoleCtrl = new FormControl(0, [
    Validators.required,
    Validators.max(9999),
    Validators.min(1)
  ]);

  constructor(
    private sessionStorage: SessionService,
    private revertStatusService: RevertStatusService,
    private updateMaxHoleService: UpdateMaxholeService
  ) { }

  ngOnChanges(): void {
    if (this.truss) {
      this.maxHoleCtrl.setValue(this.truss.maxHole);
    }
  }

  get isValidStatusIndex(): boolean {
    return this.statusIndex > -1 && this.statusIndex < this.truss.realStatus.length - 1;
  }

  receiveStatusIndex(statusIndex: number): void {
    this.statusIndex = this.statusIndex == statusIndex ? -1 : statusIndex;
  }

  private getNeededService(updateType: string, reqNumber: number): Observable<any> {
    if (updateType == 'update-maxhole') {
      return this.updateMaxHoleService.updateMaxHole(this.truss._id, reqNumber);
    }
    if (updateType == 'revert-status') {
      return this.revertStatusService.revertStatus(this.truss._id, reqNumber);
    }
    return null;
  }

  private updateDone(): void {
    this.sessionStorage.restore(RAW_TRUSS_SESSION_COLLECTION + this.truss.block);
    this.updateEv.emit();
    this.onLoad = false;
  }

  private updateTruss(updateType: string, reqNumber: number): void {
    this.onLoad = true;
    this.getNeededService(updateType, reqNumber).subscribe(_response => {
      this.updateDone();
    });
    this.statusIndex = -1;
  }

  revertStatus(): void {
    if (this.isValidStatusIndex) {
      this.updateTruss('revert-status', this.statusIndex);
    }
  }

  get isValidMaxHole(): boolean {
    return this.maxHoleCtrl.valid && this.maxHoleCtrl.value != this.truss.maxHole;
  }

  modifyTrussMaxHole(): void {
    if (this.isValidMaxHole) {
      this.updateTruss('update-maxhole', Number(this.maxHoleCtrl.value));
    }
  }
}
