import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  @Output() isValidFormVal = new EventEmitter();
  @Output() plantValOnChange = new EventEmitter<Plant>();
  @Output() selectedImg = new EventEmitter<File>();
  plantForm = new FormGroup({});
  private subscription: Subscription = new Subscription();

  constructor(public sessionStorage: SessionStorageService) { }

  ngOnInit(): void {
    this.changeFormVal(this.plantArr[0]);
    this.emitPlantValChanges();
  }

  ngOnChanges(): void {
    if (this.situation == 0) {
      const plantId = this.plantForm.value._id;
      plantId ? this.changePlantInfo(plantId) : this.changeFormVal(this.plantArr[0]);
    }
    if (this.situation == 2) {
      this.changeFormVal();
    }
  }

  changePlantInfo(plantId: string): void {
    const plantInfo = this.plantArr.find(({ _id }) => _id == plantId);
    this.changeFormVal(plantInfo);
  }

  changeFormVal(plantInfo: Plant = new Plant()): void {
    const numberValidator = [Validators.required, Validators.max(9999)];
    this.plantForm = new FormGroup({
      _id: new FormControl(plantInfo._id),
      plantName: new FormControl(plantInfo.plantName, Validators.required),
      imgSrc: new FormControl(plantInfo.imgSrc),
      plantColor: new FormControl(plantInfo.plantColor, [Validators.required, Validators.maxLength(7)]),
      growUpTime: new FormControl(plantInfo.growUpTime, numberValidator),
      mediumGrowthTime: new FormControl(plantInfo.mediumGrowthTime, numberValidator),
      seedUpTime: new FormControl(plantInfo.seedUpTime, numberValidator),
      numberPerKg: new FormControl(plantInfo.numberPerKg, numberValidator),
      alivePercent: new FormControl(plantInfo.alivePercent, [Validators.required, Validators.max(100)]),
      worm: new FormControl(plantInfo.worm),
      wormMonth: new FormControl(plantInfo.wormMonth)
    });
    this.emitPlantValChanges();
  }

  emitPlantValChanges(): void {
    this.subscription = this.plantForm.valueChanges.subscribe(plantVal => {
      plantVal.growUpTime *= 1;
      plantVal.mediumGrowthTime *= 1;
      plantVal.seedUpTime *= 1;
      plantVal.numberPerKg *= 1;
      plantVal.alivePercent *= 1;
      console.log(this.plantForm.valid)
      this.isValidFormVal.emit(this.plantForm.valid);
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
