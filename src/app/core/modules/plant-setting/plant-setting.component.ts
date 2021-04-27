import { Component, OnInit } from '@angular/core';
import { SessionStorage } from 'ngx-webstorage';
import { PLANT_SESSION_COLLECTION } from 'src/app/app-constants';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-setting',
  templateUrl: './plant-setting.component.html',
  styleUrls: ['./plant-setting.component.scss']
})
export class PlantSettingComponent implements OnInit {
  situation = 0;
  readonly = true;
  plantInfo: Plant = new Plant();
  // Variables for modify plant

  // Variables for add plant

  constructor() { }

  ngOnInit(): void {
  }
}
