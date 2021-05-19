import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SEED_SESSION_COLLECTION } from 'src/app/app-constants';
import { BasicSeedInfo, Seed } from 'src/app/core/models/seed.model';
import { DeleteOneSeedService } from 'src/app/core/services/seed/delete-one-seed.service';
import { UpdateSeedNumberService } from 'src/app/core/services/seed/update-seed-number.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { SeedModalComponent } from '../seed-modal.component';

@Component({
  selector: 'app-modal-seed-management',
  templateUrl: './modal-seed-management.component.html',
  styleUrls: ['./modal-seed-management.component.scss']
})
export class ModalSeedManagementComponent extends SeedModalComponent implements OnInit {
  seedArr: Seed[] = [];
  @Input() isReadySeed = false;
  @Input() clickEventActivated = false;
  @Output() seedElClick = new EventEmitter<BasicSeedInfo>();

  constructor(
    protected sessionStorage: SessionService,
    private deleteSeedService: DeleteOneSeedService,
    private updateSeedService: UpdateSeedNumberService
  ) {
    super(sessionStorage);
  }

  async ngOnInit(): Promise<void> {
    await super.ngOnInit();
    this.seedArr = this.sessionStorage.retrieve(SEED_SESSION_COLLECTION);
    if (this.isReadySeed) {
      this.seedArr = this.seedArr.filter(seed => seed.isReadySeed);
    }
  }

  settingIconOnClick(settingIconEl: any, settingBtnGroupEl: any): void {
    settingIconEl.classList.add('d-none');
    settingBtnGroupEl.classList.remove('d-none')
  }

  modifyIconOnClick(seedNumberEl: any, seedNumberInputEl: any, settingBtnGroupEl: any, modifyBtnGroupEl: any): void {
    this.settingIconOnClick(seedNumberEl, seedNumberInputEl);
    this.settingIconOnClick(settingBtnGroupEl, modifyBtnGroupEl);
  }

  cancelIconOnClick(seedNumberEl: any, seedNumberInputEl: any, settingIconEl: any, settingBtnGroupEl: any, modifyBtnGroupEl: any): void {
    seedNumberInputEl.value = seedNumberInputEl.defaultValue;
    this.settingIconOnClick(seedNumberInputEl, seedNumberEl);
    this.settingIconOnClick(settingBtnGroupEl, settingIconEl);
    modifyBtnGroupEl.classList.add('d-none');
  }

  deleteIconOnClick(deletedSeed: Seed): void {
    let confirm = window.confirm(`Bạn chắc chắn muốn loại bỏ hạt ${deletedSeed.plantName} này!`)
    if (confirm) {
      this.deleteSeedService.deleteOneSeed(deletedSeed._id).subscribe(async (_response) => {
        await this.reloadData();
      });
    }
  }

  updateIconOnClick(seedId: string, newPlantNumber: string): void {
    const plantNumber = Number(newPlantNumber);
    if (!isNaN(plantNumber)) {
      this.updateSeedService.updateSeedNumber(seedId, plantNumber).subscribe(async (_response) => {
        await this.reloadData();
      });
    }
  }
}
