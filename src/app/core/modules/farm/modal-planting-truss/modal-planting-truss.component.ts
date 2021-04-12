import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Truss } from 'src/app/core/models/truss.model';
import { updateStatusBody } from 'src/app/core/models/truss.request.model';
import { UpdateStatusService } from 'src/app/core/services/truss/update-status.service';

@Component({
  selector: 'app-modal-planting-truss',
  templateUrl: './modal-planting-truss.component.html',
  styleUrls: ['./modal-planting-truss.component.scss']
})
export class ModalPlantingTrussComponent implements OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  updateStatusForm: FormGroup = new FormGroup({
    newPlantGrowth: new FormControl(),
    newPlantNumber: new FormControl()
  });
  isModifyMode = false;

  constructor(private updateStatusService: UpdateStatusService) { }

  ngOnChanges(): void {
    this.revertStatus();
    this.isModifyMode = false;
  }

  modifyBtnOnClick(): void {
    this.isModifyMode = !this.isModifyMode;
  }

  revertStatus(): void {
    this.updateStatusForm.setControl('newPlantGrowth', new FormControl(this.clickedTruss.plantGrowth));
    this.updateStatusForm.setControl('newPlantNumber', new FormControl(this.clickedTruss.plantNumber));
  }

  saveStatus(): void {
    if (this.isValidNewStatus) {
      const requestBody = new updateStatusBody(this.clickedTruss._id, this.newPlantNumber, this.newPlantGrowth);
      this.updateStatusService.updateStatusService(requestBody);
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
