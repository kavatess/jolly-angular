import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { Truss } from 'src/app/core/models/truss.model';
import { GetTrussByBlockService } from 'src/app/core/services/truss/get-truss-by-block.service';
import { ModalComp } from 'src/app/shared/base-component/base-modal.component';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent extends ModalComp implements OnInit, OnChanges {
  @Input() clickedTruss: Truss = new Truss();
  @Output() onUpdate = new EventEmitter<Truss>();

  constructor(protected sessionStorage: SessionStorageService, protected getTrussService: GetTrussByBlockService) {
    super();
  }

  ngOnChanges(): void {
    this.changeLoadStatus(false);
  }

  protected async reloadData(): Promise<void> {
    this.changeLoadStatus(true);
    const trussCollection = TRUSS_SESSION_COLLECTION + this.clickedTruss.block;
    this.sessionStorage.clear(trussCollection);
    const newTrussArr = await this.getTrussService.getTrussDataByBlock(this.clickedTruss.block).toPromise();
    this.sessionStorage.store(trussCollection, newTrussArr);
    const newClickedTruss = newTrussArr.find(truss => truss._id == this.clickedTruss._id);
    this.onUpdate.emit(newClickedTruss);
  }
}
