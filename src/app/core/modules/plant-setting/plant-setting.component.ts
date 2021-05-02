import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-setting',
  templateUrl: './plant-setting.component.html',
  styleUrls: ['./plant-setting.component.scss']
})
export class PlantSettingComponent implements OnInit {
  situation = 0;
  plantInfo: Plant = new Plant();
  imgFile: File = null;

  constructor() { }

  ngOnInit(): void { }

  changeTab(tabNum: number, navbarEl: any): void {
    this.situation = tabNum;
    document.querySelectorAll('.nav-link').forEach(element => {
      element.classList.remove('active');
    });
    navbarEl.target.classList.add('active');
  }

  modifyPlantInfo(): void {
    if (this.situation == 1) {
      console.log(this.plantInfo, this.imgFile);
    }
  }
}
