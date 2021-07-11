import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClearTrussService } from 'src/app/services/truss/clear-truss.service';
import { UpdateStatusService } from 'src/app/services/truss/update-status.service';
import { Truss } from 'src/app/models/truss.model';

@Component({
  selector: 'app-modal-planting-truss',
  templateUrl: './modal-planting-truss.component.html',
  styleUrls: ['./modal-planting-truss.component.scss']
})
export class ModalPlantingTrussComponent implements OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  @Output() updateEv = new EventEmitter();
  updateStatusForm: FormGroup = new FormGroup({
    newPlantGrowth: new FormControl(),
    newPlantNumber: new FormControl()
  });
  isModifyMode = false;

  constructor(private updateStatusService: UpdateStatusService, private clearTrussService: ClearTrussService) { }

  ngOnChanges(): void {
    this.revertStatus();
    this.isModifyMode = false;
  }

  changeMode(): void {
    this.isModifyMode = !this.isModifyMode;
  }

  revertStatus(): void {
    this.updateStatusForm.setControl('newPlantGrowth', new FormControl(this.clickedTruss.plantGrowth));
    this.updateStatusForm.setControl('newPlantNumber', new FormControl(this.clickedTruss.plantNumber));
  }

  clearTruss(): void {
    let confirm = window.confirm(`Bạn chắc chắn muốn xóa giàn ${this.clickedTruss.block + this.clickedTruss.index} này chứ!`);
    if (confirm) {
      this.clearTrussService.clearTruss(this.clickedTruss._id).subscribe(_response => {
        this.updateEv.emit();
      });
    }
  }

  saveStatus(): void {
    if (this.isValidNewStatus) {
      this.updateStatusService.updateStatus(this.clickedTruss._id, this.newPlantGrowth, this.newPlantNumber).subscribe(_response => {
        this.updateEv.emit();
      });
    }
  }

  get isValidNewStatus(): boolean {
    const validNewPlantGrowth = this.newPlantGrowth >= this.clickedTruss.plantGrowth;
    const validNewPlantNumber = this.newPlantNumber <= this.clickedTruss.plantNumber;
    const exceptCond = this.newPlantGrowth == this.clickedTruss.plantGrowth && this.newPlantNumber == this.clickedTruss.plantNumber;
    return validNewPlantGrowth && validNewPlantNumber && !exceptCond;
  }
  private get newPlantNumber(): number {
    return Number(this.updateStatusForm.value.newPlantNumber);
  }
  private get newPlantGrowth(): number {
    return Number(this.updateStatusForm.value.newPlantGrowth);
  }
}
