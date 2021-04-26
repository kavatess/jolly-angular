import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { PLANT_SESSION_COLLECTION } from './app-constants';
import { GetPlantDataService } from './core/services/plant/get-plant-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'jolly-angular';

  constructor(private sessionStorage: SessionStorageService, private getPlantService: GetPlantDataService) { }

  ngOnInit(): void {
    if (!this.sessionStorage.retrieve(PLANT_SESSION_COLLECTION)) {
      this.getPlantService.getPlantData().subscribe(plantArr => {
        this.sessionStorage.store(PLANT_SESSION_COLLECTION, plantArr);
      });
    }
  }
}
