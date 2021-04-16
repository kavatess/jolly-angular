import { Component, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UpdateStatusBody } from 'src/app/core/models/truss.request.model';
import { ClearTrussService } from 'src/app/core/services/truss/clear-truss.service';
import { UpdateStatusService } from 'src/app/core/services/truss/update-status.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { FarmModalComponent } from '../farm-modal.component';

@Component({
  selector: 'app-modal-planting-truss',
  templateUrl: './modal-planting-truss.component.html',
  styleUrls: ['./modal-planting-truss.component.scss']
})
export class ModalPlantingTrussComponent extends FarmModalComponent implements OnChanges {
  updateStatusForm: FormGroup = new FormGroup({
    newPlantGrowth: new FormControl(),
    newPlantNumber: new FormControl()
  });
  isModifyMode = false;

  constructor(
    protected sessionStorage: SessionStorageService,
    private updateStatusService: UpdateStatusService,
    private clearTrussService: ClearTrussService
  ) { 
    super(sessionStorage);
  }

  ngOnChanges(): void {
    this.revertStatus();
    this.isModifyMode = false;
  }

  changeMode(): void {
    this.isModifyMode = !this.isModifyMode;
  }

  revertStatus(): void {
    this.updateStatusForm.setControl('newPlantGrowth', new FormControl(this.modalTruss.plantGrowth));
    this.updateStatusForm.setControl('newPlantNumber', new FormControl(this.modalTruss.plantNumber));
  }

  clearTruss(): void {
    let confirm = window.confirm(`Bạn chắc chắn muốn xóa giàn ${this.modalTruss.block + this.modalTruss.index} này chứ!`);
    if (confirm) {
      this.clearTrussService.clearTruss(this.modalTruss._id).subscribe(async _response => {
        await this.reloadClickedTruss();
      });
    }
  }

  saveStatus(): void {
    if (this.isValidNewStatus) {
      const requestBody = new UpdateStatusBody(this.modalTruss._id, this.newPlantNumber, this.newPlantGrowth);
      this.updateStatusService.updateStatusService(requestBody).subscribe(async _response => {
        await this.reloadClickedTruss();
      });
    }
  }

  get isValidNewStatus(): boolean {
    const validNewPlantGrowth = this.newPlantGrowth >= this.modalTruss.plantGrowth;
    const validNewPlantNumber = this.newPlantNumber <= this.modalTruss.plantNumber;
    const exceptCond = this.newPlantGrowth == this.modalTruss.plantGrowth && this.newPlantNumber == this.modalTruss.plantNumber;
    return validNewPlantGrowth && validNewPlantNumber && !exceptCond;
  }
  private get newPlantNumber(): number {
    return Number(this.updateStatusForm.value.newPlantNumber);
  }
  private get newPlantGrowth(): number {
    return Number(this.updateStatusForm.value.newPlantGrowth);
  }
  
}
