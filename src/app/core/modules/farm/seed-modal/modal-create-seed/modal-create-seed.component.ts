import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { PLANT_SESSION_COLLECTION } from 'src/app/app-constants';
import { BasicSeedInfo, SimpleSeed } from 'src/app/core/models/seed.model';
import { GetSeedDataService } from 'src/app/core/services/seed/get-seed-data.service';
import { InsertSeedService } from 'src/app/core/services/seed/insert-seed.service';
import { SeedModalComponent } from '../seed-modal.component';

@Component({
  selector: 'app-modal-create-seed',
  templateUrl: './modal-create-seed.component.html',
  styleUrls: ['./modal-create-seed.component.scss']
})
export class ModalCreateSeedComponent extends SeedModalComponent implements OnInit {
  createSeedForm: FormGroup = new FormGroup({});
  seedCreatedArr: BasicSeedInfo[] = [];

  constructor(public sessionStorage: SessionStorageService, protected getSeedService: GetSeedDataService, private addSeedService: InsertSeedService) {
    super(sessionStorage, getSeedService);
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.createSeedForm = new FormGroup({
      plantId: new FormControl(''),
      startDate: new FormControl(new Date().toString()),
      plantNumber: new FormControl(300, [
        Validators.required,
        Validators.maxLength(4)
      ])
    });
    const plantArr = this.sessionStorage.retrieve(PLANT_SESSION_COLLECTION);
    this.createSeedForm.setControl('plantId', new FormControl(plantArr[0]._id));
  }

  addNewSeed(): void {
    const plantArr = this.sessionStorage.retrieve(PLANT_SESSION_COLLECTION);
    const plantType = plantArr.find(({ _id }) => _id == this.createSeedForm.value.plantId);
    const newSeed = new BasicSeedInfo(this.createSeedForm.value, plantType);
    this.seedCreatedArr.push(newSeed);
  }

  removeSeed(seedIndex: number): void {
    this.seedCreatedArr.splice(seedIndex, 1);
  }

  insertToDB(): void {
    if (this.seedCreatedArr.length) {
      const newSeedArr: SimpleSeed[] = this.seedCreatedArr.map(({ plantId, startDate, plantNumber }) => {
        return { plantId, startDate, plantNumber };
      });
      this.addSeedService.insertManySeed(newSeedArr).subscribe(async (_response) => {
        await this.reloadData();
        this.switchMode = false;
      });
    }
  }

}
