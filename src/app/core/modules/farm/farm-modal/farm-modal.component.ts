import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from 'src/app/core/models/truss.model';
import { ModalComp } from 'src/app/shared/base-component/base-modal.component';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent extends ModalComp implements OnInit, OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  @Output() onUpdate = new EventEmitter<Truss>();

  constructor(protected sessionStorage: SessionService) {
    super();
  }

  ngOnChanges(): void {
    this.changeLoadStatus(false);
  }

  public async reloadData(): Promise<void> {
    this.changeLoadStatus(true);
    const newTrussArr: Truss[] = await this.sessionStorage.restore(TRUSS_SESSION_COLLECTION + this.clickedTruss.block);
    const newClickedTruss = newTrussArr.find(truss => truss._id == this.clickedTruss._id);
    this.onUpdate.emit(newClickedTruss);
  }
}
