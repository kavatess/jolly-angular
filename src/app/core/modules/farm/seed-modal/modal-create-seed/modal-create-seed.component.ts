import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PLANT_SESSION_COLLECTION } from 'src/app/app-constants';
import { Plant } from 'src/app/core/models/plant.model';
import { BasicSeedInfo, SimpleSeed } from 'src/app/core/models/seed.model';
import { InsertSeedService } from 'src/app/core/services/seed/insert-seed.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { SeedModalComponent } from '../seed-modal.component';

@Component({
  selector: 'app-modal-create-seed',
  templateUrl: './modal-create-seed.component.html',
  styleUrls: ['./modal-create-seed.component.scss']
})
export class ModalCreateSeedComponent extends SeedModalComponent implements OnInit {
  plantArr: Plant[] = [];
  createSeedForm: FormGroup = new FormGroup({});
  seedCreatedArr: BasicSeedInfo[] = [];

  constructor(protected sessionStorage: SessionService, private addSeedService: InsertSeedService) {
    super(sessionStorage);
  }

  async ngOnInit(): Promise<void> {
    this.plantArr = await this.sessionStorage.getAsync(PLANT_SESSION_COLLECTION);
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
    this.createSeedForm.setControl('plantId', new FormControl(this.plantArr[0]._id));
  }

  addNewSeed(): void {
    const plantType = this.plantArr.find(({ _id }) => _id == this.createSeedForm.value.plantId);
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
        this.switchModeTo(false);
      });
    }
  }
}