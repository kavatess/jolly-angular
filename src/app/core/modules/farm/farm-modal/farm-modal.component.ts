import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from 'src/app/core/models/truss.model';
import { GetTrussByBlockService } from 'src/app/core/services/truss/get-truss-by-block.service';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent implements OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  @Output() reload = new EventEmitter<Truss>();
  private static onReloading = false;

  constructor(protected sessionStorage: SessionStorageService, protected getTrussService: GetTrussByBlockService) { }

  ngOnChanges(): void {
    FarmModalComponent.onReloading = false;
  }

  get onReloading(): boolean {
    return FarmModalComponent.onReloading;
  }

  protected async reloadClickedTruss(): Promise<void> {
    FarmModalComponent.onReloading = true;
    const trussCollection = TRUSS_SESSION_COLLECTION + this.clickedTruss.block;
    this.sessionStorage.clear(trussCollection);
    const newTrussArr = await this.getTrussService.getTrussDataByBlock(this.clickedTruss.block).toPromise();
    this.sessionStorage.store(trussCollection, newTrussArr);
    const newClickedTruss = newTrussArr.find(truss => truss._id == this.clickedTruss._id);
    this.reload.emit(newClickedTruss);
  }
}
