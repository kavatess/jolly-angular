import { Component, OnChanges } from '@angular/core';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-setting',
  templateUrl: './plant-setting.component.html',
  styleUrls: ['./plant-setting.component.scss']
})
export class PlantSettingComponent implements OnChanges {
  selectedPlant: Plant = new Plant();
  

  constructor() { }

  ngOnChanges(): void {
  }

}
