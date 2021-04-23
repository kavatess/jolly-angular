import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from 'src/app/core/models/truss.model';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent implements OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  @Output() reload = new EventEmitter<Truss>();
  private static onReloading = false;

  constructor(protected sessionStorage: SessionStorageService) { }

  ngOnChanges(): void {
    FarmModalComponent.onReloading = false;
  }

  get onReloading(): boolean {
    return FarmModalComponent.onReloading;
  }

  protected async reloadClickedTruss(): Promise<void> {
    FarmModalComponent.onReloading = true;
    const updatedTrussArr = await this.sessionStorage.reset(TRUSS_SESSION_COLLECTION + this.clickedTruss.block);
    const newClickedTruss = updatedTrussArr.find(truss => truss._id == this.clickedTruss._id);
    this.reload.emit(newClickedTruss);
  }
}
