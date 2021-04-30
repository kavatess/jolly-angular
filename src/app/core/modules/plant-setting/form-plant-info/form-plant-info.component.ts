import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';
import { Subscription } from 'rxjs';
import { PLANT_SESSION_COLLECTION } from 'src/app/app-constants';
import { Plant } from 'src/app/core/models/plant.model';

@Component({
  selector: 'app-form-plant-info',
  templateUrl: './form-plant-info.component.html',
  styleUrls: ['./form-plant-info.component.scss']
})
export class FormPlantInfoComponent implements OnInit, OnChanges, OnDestroy {
  @SessionStorage(PLANT_SESSION_COLLECTION)
  plantArr: Plant[];
  @Input() situation = 0;
  @Output() plantValOnChange = new EventEmitter<Plant>();
  @Output() selectedImg = new EventEmitter<File>();
  plantForm = new FormGroup({});
  private subscription: Subscription = new Subscription();

  constructor(public sessionStorage: SessionStorageService) { }

  ngOnInit(): void {
    if (this.situation < 2) {
      this.changeFormVal(this.plantArr[0]._id);
    } else {
      this.changeFormVal();
    }
    this.subcribePlantValChanges();
  }

  ngOnChanges(): void {
    if (this.situation == 0 && this.plantForm.get('plantId')) {
      const plantId = this.plantForm.get('plantId').value;
      this.changeFormVal(plantId);
    }
  }

  changeFormVal(plantId: string = ''): void {
    const plantInfo = this.plantArr.find(({ _id }) => _id == plantId) || new Plant();
    if (plantInfo._id) {
      this.plantForm.setControl('plantId', new FormControl(plantInfo._id));
    } else {
      this.plantForm.removeControl('plantId');
    }
    this.plantForm.setControl('plantName', new FormControl(plantInfo.plantName));
    this.plantForm.setControl('plantColor', new FormControl(plantInfo.plantColor));
    this.plantForm.setControl('growUpTime', new FormControl(plantInfo.growUpTime));
    this.plantForm.setControl('mediumGrowthTime', new FormControl(plantInfo.mediumGrowthTime));
    this.plantForm.setControl('seedUpTime', new FormControl(plantInfo.seedUpTime));
    this.plantForm.setControl('numberPerKg', new FormControl(plantInfo.numberPerKg));
    this.plantForm.setControl('alivePercent', new FormControl(plantInfo.alivePercent));
    this.plantForm.setControl('worm', new FormControl(plantInfo.worm));
    this.plantForm.setControl('wormMonth', new FormControl(plantInfo.wormMonth));
  }

  subcribePlantValChanges(): void {
    this.subscription = this.plantForm.valueChanges.subscribe(plantVal => {
      plantVal.growUpTime *= 1;
      plantVal.mediumGrowthTime *= 1;
      plantVal.seedUpTime *= 1;
      plantVal.numberPerKg *= 1;
      plantVal.alivePercent *= 1;
      this.plantValOnChange.emit(plantVal);
    });
  }

  onFileChanged(imgInput: any): void {
    this.selectedImg.emit(imgInput.target.files[0]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
