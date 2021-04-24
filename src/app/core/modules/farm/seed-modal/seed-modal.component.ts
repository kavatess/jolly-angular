import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { SEED_SESSION_COLLECTION } from 'src/app/app-constants';
import { GetSeedDataService } from 'src/app/core/services/seed/get-seed-data.service';

@Component({
  selector: 'app-seed-modal',
  templateUrl: './seed-modal.component.html',
  styleUrls: ['./seed-modal.component.scss']
})
export class SeedModalComponent implements OnInit {
  private static onReloading = false;
  private static addSeedMode = false;

  constructor(public sessionStorage: SessionStorageService, protected getSeedService: GetSeedDataService) { }

  get onReloading(): boolean {
    return SeedModalComponent.onReloading;
  }
  get isAddMode(): boolean {
    return SeedModalComponent.addSeedMode;
  }
  set switchMode(mode: boolean) {
    SeedModalComponent.addSeedMode = mode;
  }

  ngOnInit(): void {
    if (!this.sessionStorage.retrieve(SEED_SESSION_COLLECTION)) {
      this.getSeedService.getSeedData().subscribe(seedArr => {
        this.sessionStorage.store(SEED_SESSION_COLLECTION, seedArr);
      });
    }
  }

  protected async reloadSeedData(): Promise<void> {
    SeedModalComponent.onReloading = true;
    this.sessionStorage.clear(SEED_SESSION_COLLECTION);
    const newSeedArr = await this.getSeedService.getSeedData().toPromise();
    this.sessionStorage.store(SEED_SESSION_COLLECTION, newSeedArr);
    SeedModalComponent.onReloading = false;
  }

}

