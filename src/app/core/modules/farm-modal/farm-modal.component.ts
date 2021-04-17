import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { Truss } from '../../models/truss.model';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent implements OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  @Output() reload = new EventEmitter<Truss>();

  constructor(protected sessionStorage: SessionStorageService) { }

  ngOnChanges(): void { }

  protected async reloadClickedTruss(): Promise<void> {
    this.reload.emit(this.clickedTruss);
    const updatedTrussArr = await this.sessionStorage.reset(TRUSS_SESSION_COLLECTION + this.clickedTruss.block);
    const newClickedTruss = updatedTrussArr.find(truss => truss._id == this.clickedTruss._id);
    this.reload.emit(newClickedTruss);
  }
}
