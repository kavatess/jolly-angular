import { Component, Input, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Plant } from 'src/app/core/models/plant.model';

@Component({
  selector: 'app-form-plant-info',
  templateUrl: './form-plant-info.component.html',
  styleUrls: ['./form-plant-info.component.scss']
})
export class FormPlantInfoComponent implements OnChanges {
  @Input() plantInfo: Plant = new Plant();
  @Input() readOnly = false;
  @Input() selectPlantName = false;
  plantForm = new FormGroup({});

  constructor() { }

  ngOnChanges(): void {
    this.initializeForm();
    document.querySelectorAll('input').forEach(input => {
      input.readOnly = this.readOnly;
    });
  }

  initializeForm(): void {
    this.plantForm = new FormGroup({
      plantName: new FormControl(this.plantInfo.plantName),
      plantColor: new FormControl(this.plantInfo.plantColor),
      growUpTime: new FormControl(this.plantInfo.growUpTime),
      mediumGrowthTime: new FormControl(this.plantInfo.mediumGrowthTime),
      seedUpTime: new FormControl(this.plantInfo.seedUpTime),
      numberPerKg: new FormControl(this.plantInfo.numberPerKg),
      alivePercent: new FormControl(this.plantInfo.alivePercent),
      worm: new FormControl(this.plantInfo.worm),
      wormMonth: new FormControl(this.plantInfo.wormMonth)
    });
  }

}
