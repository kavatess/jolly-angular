import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BasicSeedInfo, Seed } from 'src/app/core/models/seed.model';
import { DeleteOneSeedService } from 'src/app/core/services/seed/delete-one-seed.service';
import { UpdateSeedNumberService } from 'src/app/core/services/seed/update-seed-number.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-modal-seed-management',
  templateUrl: './modal-seed-management.component.html',
  styleUrls: ['./modal-seed-management.component.scss']
})
export class ModalSeedManagementComponent implements OnInit {
  @Input() seedArr: Seed[] = [];
  @Input() clickEventActivated = false;
  @Output() seedElClick = new EventEmitter<BasicSeedInfo>();

  constructor(
    private sessionStorage: SessionStorageService,
    private deleteSeedService: DeleteOneSeedService,
    private updateSeedService: UpdateSeedNumberService
  ) { }

  ngOnInit(): void {
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
      this.deleteSeedService.deleteOneSeed(deletedSeed._id).subscribe(_response => {
        this.sessionStorage.reset('seed-arr');
      });
    }
  }

  updateIconOnClick(seedId: string, newPlantNumber: string): void {
    const plantNumber = Number(newPlantNumber);
    if (!isNaN(plantNumber)) {
      this.updateSeedService.updateSeedNumber(seedId, plantNumber).subscribe(_response => {
        this.sessionStorage.reset('seed-arr');
      });
    }
  }

}
