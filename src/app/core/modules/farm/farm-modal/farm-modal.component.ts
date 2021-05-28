import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { Truss } from 'src/app/models/truss.model';
import { BaseModalComponent } from 'src/app/shared/base-component/base-modal.component';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent extends BaseModalComponent implements OnInit, OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  @Output() onUpdate = new EventEmitter<Truss>();

  constructor(protected sessionStorage: SessionService) {
    super();
  }

  ngOnChanges(): void {
    this.changeReloadStatus(false);
  }

  public async reloadData(): Promise<void> {
    this.changeReloadStatus(true);
    const newTrussArr: Truss[] = await this.sessionStorage.restore(SESSION_STORAGE_KEY.TRUSS + this.clickedTruss.block);
    const newClickedTruss = newTrussArr.find(truss => truss._id == this.clickedTruss._id);
    this.onUpdate.emit(newClickedTruss);
  }
}
