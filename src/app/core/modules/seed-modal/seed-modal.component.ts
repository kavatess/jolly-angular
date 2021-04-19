import { Component, OnInit } from '@angular/core';
import { SEED_SESSION_COLLECTION } from 'src/app/app-constants';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-seed-modal',
  templateUrl: './seed-modal.component.html',
  styleUrls: ['./seed-modal.component.scss']
})
export class SeedModalComponent implements OnInit {
  private static onReloading = false;
  private static addSeedMode = false;

  constructor(public sessionStorage: SessionStorageService) { }

  get onReloading(): boolean {
    return SeedModalComponent.onReloading;
  }
  get isAddMode(): boolean {
    return SeedModalComponent.addSeedMode;
  }
  changeMode(mode: boolean): void {
    SeedModalComponent.addSeedMode = mode;
  }

  ngOnInit(): void { }

  protected async reloadSeedData(): Promise<void> {
    SeedModalComponent.onReloading = true;
    await this.sessionStorage.reset(SEED_SESSION_COLLECTION);
    SeedModalComponent.onReloading = false;
  }

}

