import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PLANT_SESSION_COLLECTION } from 'src/app/app-constants';
import { BasicSeedInfo, SimpleSeed } from 'src/app/core/models/seed.model';
import { InsertSeedService } from 'src/app/core/services/seed/insert-seed.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { SeedModalComponent } from '../seed-modal.component';

@Component({
  selector: 'app-modal-create-seed',
  templateUrl: './modal-create-seed.component.html',
  styleUrls: ['./modal-create-seed.component.scss']
})
export class ModalCreateSeedComponent extends SeedModalComponent implements OnInit {
  createSeedForm: FormGroup = new FormGroup({});
  seedCreatedArr: BasicSeedInfo[] = [];

  constructor(public sessionStorage: SessionStorageService, private addSeedService: InsertSeedService) {
    super(sessionStorage);
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  async initializeForm(): Promise<void> {
    this.createSeedForm = new FormGroup({
      plantId: new FormControl(''),
      startDate: new FormControl(new Date().toString()),
      plantNumber: new FormControl(300, [
        Validators.required,
        Validators.maxLength(4)
      ])
    });
    const plantArr = await this.sessionStorage.getAsync(PLANT_SESSION_COLLECTION);
    this.createSeedForm.setControl('plantId', new FormControl(plantArr[0]._id));
  }

  async addNewSeed(): Promise<void> {
    const plantArr = await this.sessionStorage.getAsync(PLANT_SESSION_COLLECTION);
    const plantType = plantArr.find(plant => plant._id == this.createSeedForm.value.plantId);
    const newSeed = new BasicSeedInfo(this.createSeedForm.value, plantType);
    this.seedCreatedArr.push(newSeed);
  }

  removeSeed(seedIndex: number): void {
    this.seedCreatedArr.splice(seedIndex, 1);
  }

  insertToDB(): void {
    if (this.seedCreatedArr.length) {
      const newSeedArr: SimpleSeed[] = this.seedCreatedArr.map(seed => {
        return {
          plantId: seed.plantId,
          startDate: seed.startDate,
          plantNumber: seed.plantNumber
        }
      })
      this.addSeedService.insertManySeed(newSeedArr).subscribe(async (_response) => {
        await this.reloadSeedData();
        this.changeMode(false);
      });
    }
  }

}
