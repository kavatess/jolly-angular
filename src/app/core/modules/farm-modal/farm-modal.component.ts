import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { Truss } from '../../models/truss.model';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent implements OnChanges {
  private static modalTruss: Truss = new Truss();
  @Input() private clickedTruss: Truss = new Truss();
  @Output() reload = new EventEmitter<Truss>();

  constructor(protected sessionStorage: SessionStorageService) { }

  set setModalTruss(newTruss: Truss) {
    FarmModalComponent.modalTruss = newTruss;
  }
  get modalTruss(): Truss {
    return FarmModalComponent.modalTruss;
  }

  ngOnChanges(): void {
    this.setModalTruss = this.clickedTruss;
  }

  protected async reloadClickedTruss(): Promise<void> {
    await this.sessionStorage.reset(this.clickedTruss.block);
    const newClickedTruss = this.sessionStorage.trussData[this.clickedTruss.block].find(truss => truss._id == this.clickedTruss._id);
    this.setModalTruss = newClickedTruss;
    this.reload.emit(this.sessionStorage.trussData[this.clickedTruss.block]);
  }
}
