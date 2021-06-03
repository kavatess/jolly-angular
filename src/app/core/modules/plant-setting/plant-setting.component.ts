import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { SessionService } from 'src/app/shared/services/session.service';
import { Plant } from '../../../models/plant.model';
import { UploadImgbbService } from '../../services/others/upload-imgbb.service';
import { InsertPlantService } from '../../services/plant/insert-plant.service';
import { UpdatePlantService } from '../../services/plant/update-plant.service';

@Component({
  selector: 'app-plant-setting',
  templateUrl: './plant-setting.component.html',
  styleUrls: ['./plant-setting.component.scss']
})
export class PlantSettingComponent implements OnInit {
  plantArr: Plant[] = [];
  situation = 0;
  plantInfo: Plant = new Plant();
  imgFile: File = null;
  onLoading = false;
  validPlantInfo = false;

  constructor(
    private sessionStorage: SessionService,
    private updatePlantService: UpdatePlantService,
    private insertPlantService: InsertPlantService,
    private uploadImgService: UploadImgbbService
  ) { }

  async ngOnInit() {
    this.plantArr = await this.sessionStorage.getAsync(SESSION_STORAGE_KEY.PLANT);
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

  private async callApiByUpdateType(updateType: string): Promise<any> {
    if (updateType == 'modify') {
      return await this.updatePlantService.updatePlant(this.plantInfo).toPromise();
    }
    if (updateType == 'add') {
      return await this.insertPlantService.insertOnePlant(this.plantInfo).toPromise();
    }
    return null;
  }

  private async reloadPlantData(): Promise<void> {
    this.plantArr = await this.sessionStorage.restore(SESSION_STORAGE_KEY.PLANT);
    this.changeSituation(0);
    this.onLoading = false;
  }

  async updateDataByType(updateType: string): Promise<void> {
    if (this.validPlantInfo) {
      this.onLoading = true;
      await this.uploadImgIfNeeded();
      await this.callApiByUpdateType(updateType);
      this.reloadPlantData();
    }
  }

  async modifyPlantInfo(): Promise<void> {
    if (this.situation == 1) {
      this.updateDataByType('modify');
    }
  }

  async addPlantInfo(): Promise<void> {
    if (this.situation == 2) {
      this.updateDataByType('add');
    }
  }
}