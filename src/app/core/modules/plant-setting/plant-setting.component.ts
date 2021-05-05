import { Component, OnInit } from '@angular/core';
import { PLANT_SESSION_COLLECTION } from 'src/app/app-constants';
import { SessionService } from 'src/app/shared/services/session.service';
import { Plant } from '../../models/plant.model';
import { UploadImgbbService } from '../../services/img/upload-imgbb.service';
import { InsertPlantService } from '../../services/plant/insert-plant.service';
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

  constructor(
    private sessionStorage: SessionService,
    private updatePlantService: UpdatePlantService,
    private insertPlantService: InsertPlantService,
    private uploadImgService: UploadImgbbService
  ) { }

  ngOnInit(): void {
    this.sessionStorage.getAsync(PLANT_SESSION_COLLECTION);
  }

  changeSituation(newSit: number): void {
    this.situation = newSit;
    this.validPlantInfo = false;
    this.imgFile = null;
  }

  changeTab(situation: number, navbarEl: any): void {
    this.changeSituation(situation);
    document.querySelectorAll('.nav-link').forEach(element => {
      element.classList.remove('active');
    });
    navbarEl.target.classList.add('active');
  }

  private async uploadImgIfNeeded() {
    if (this.imgFile) {
      this.plantInfo.imgSrc = await this.uploadImgService.uploadImgBB(this.imgFile).toPromise();
    }
  }

  async modifyPlantInfo() {
    if (this.situation == 1 && this.validPlantInfo) {
      await this.uploadImgIfNeeded();
      const updatedPlantArr = await this.updatePlantService.updatePlant(this.plantInfo).toPromise();
      this.reloadPlantData(updatedPlantArr)
    }
  }

  async addPlantInfo() {
    if (this.situation == 2 && this.validPlantInfo) {
      await this.uploadImgIfNeeded();
      const updatedPlantArr = await this.insertPlantService.insertOnePlant(this.plantInfo).toPromise();
      this.reloadPlantData(updatedPlantArr)
    }
  }

  reloadPlantData(newPlantArr: Plant[]): void {
    this.sessionStorage.store(PLANT_SESSION_COLLECTION, newPlantArr);
    this.changeSituation(0);
  }
}
