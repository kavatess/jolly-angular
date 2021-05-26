import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { ModalComp } from 'src/app/shared/base-component/base-modal.component';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-seed-modal',
  templateUrl: './seed-modal.component.html',
  styleUrls: ['./seed-modal.component.scss']
})
export class SeedModalComponent extends ModalComp implements OnInit {
  private static isCreateSeedMode = false;

  constructor(protected sessionStorage: SessionService) {
    super();
  }

  get isCreateSeedMode(): boolean {
    return SeedModalComponent.isCreateSeedMode;
  }
  switchModeTo(mode: boolean) {
    SeedModalComponent.isCreateSeedMode = mode;
  }

  async ngOnInit(): Promise<void> {
    this.changeLoadStatus(false);
    await this.sessionStorage.getAsync(SESSION_STORAGE_KEY.SEED);
  }

  protected async reloadData(): Promise<void> {
    this.changeLoadStatus(true);
    await this.sessionStorage.restore(SESSION_STORAGE_KEY.SEED);
    this.changeLoadStatus(false);
  }
}
