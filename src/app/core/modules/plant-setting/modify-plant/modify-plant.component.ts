import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';
import { PLANT_SESSION_COLLECTION } from 'src/app/app-constants';
import { Plant } from 'src/app/core/models/plant.model';

@Component({
  selector: 'app-modify-plant',
  templateUrl: './modify-plant.component.html',
  styleUrls: ['./modify-plant.component.scss']
})
export class ModifyPlantComponent implements OnInit {
  plantInfo: Plant = new Plant();
  readonly = true;
  @SessionStorage(PLANT_SESSION_COLLECTION)
  plantArr: Plant[];

  constructor() { }

  ngOnInit(): void {
    this.plantInfo = this.plantArr[0];
  }

  chosenPlantOnChange(plantId: string): void {
    this.plantInfo = this.plantArr.find(({ _id }) => _id == plantId);
  }

}
