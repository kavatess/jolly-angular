import { Component, OnInit } from '@angular/core';
import { PLANT_SESSION_COLLECTION } from 'src/app/app-constants';
import { SessionService } from 'src/app/shared/services/session.service';
import { Plant } from '../../models/plant.model';
import { UpdatePlantService } from '../../services/plant/update-plant.service';

@Component({
  selector: 'app-plant-setting',
  templateUrl: './plant-setting.component.html',
  styleUrls: ['./plant-setting.component.scss']
})
export class PlantSettingComponent implements OnInit {
  situation = 0;
  plantInfo: Plant = new Plant();
  validPlantInfo = false;
  imgFile: File = null;

  constructor(private updatePlantService: UpdatePlantService, private sessionStorage: SessionService) { }

  ngOnInit(): void {
    this.sessionStorage.getAsync(PLANT_SESSION_COLLECTION);
  }

  changeTab(tabNum: number, navbarEl: any): void {
    this.situation = tabNum;
    document.querySelectorAll('.nav-link').forEach(element => {
      element.classList.remove('active');
    });
    navbarEl.target.classList.add('active');
  }

  modifyPlantInfo(): void {
    if (this.situation == 1) {
      this.updatePlantService.updatePlant(this.plantInfo).subscribe(response => {
        this.sessionStorage.store(PLANT_SESSION_COLLECTION, response);
        this.situation = 0;
        this.validPlantInfo = false;
      });
    }
  }
}
