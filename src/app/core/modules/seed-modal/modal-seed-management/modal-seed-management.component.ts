import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { SeedModalComponent } from '../seed-modal.component';

@Component({
  selector: 'app-modal-seed-management',
  templateUrl: './modal-seed-management.component.html',
  styleUrls: ['./modal-seed-management.component.scss']
})
export class ModalSeedManagementComponent extends SeedModalComponent implements OnInit {

  constructor(public sessionStorageService: SessionStorageService) {
    super();
  }

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
    this.settingIconOnClick(seedNumberInputEl, seedNumberEl);
    this.settingIconOnClick(settingBtnGroupEl, settingIconEl);
    modifyBtnGroupEl.classList.add('d-none');
  }
}
