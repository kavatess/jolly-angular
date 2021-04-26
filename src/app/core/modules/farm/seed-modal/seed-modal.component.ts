import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { SEED_SESSION_COLLECTION } from 'src/app/app-constants';
import { GetSeedDataService } from 'src/app/core/services/seed/get-seed-data.service';
import { ModalComp } from 'src/app/shared/base-component/base-modal.component';

@Component({
  selector: 'app-seed-modal',
  templateUrl: './seed-modal.component.html',
  styleUrls: ['./seed-modal.component.scss']
})
export class SeedModalComponent extends ModalComp implements OnInit {
  private static addSeedMode = false;

  constructor(public sessionStorage: SessionStorageService, protected getSeedService: GetSeedDataService) {
    super();
  }

  get isAddMode(): boolean {
    return SeedModalComponent.addSeedMode;
  }
  set switchMode(mode: boolean) {
    SeedModalComponent.addSeedMode = mode;
  }

  ngOnInit(): void {
    this.changeLoadStatus(false);
    if (!this.sessionStorage.retrieve(SEED_SESSION_COLLECTION)) {
      this.getSeedService.getSeedData().subscribe(seedArr => {
        this.sessionStorage.store(SEED_SESSION_COLLECTION, seedArr);
      });
    }
  }

  protected async reloadData(): Promise<void> {
    this.changeLoadStatus(true);
    this.sessionStorage.clear(SEED_SESSION_COLLECTION);
    const newSeedArr = await this.getSeedService.getSeedData().toPromise();
    this.sessionStorage.store(SEED_SESSION_COLLECTION, newSeedArr);
    this.changeLoadStatus(false);
  }

}
