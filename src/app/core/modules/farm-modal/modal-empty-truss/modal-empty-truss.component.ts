import { Component, OnChanges } from '@angular/core';
import { Seed } from 'src/app/core/models/seed.model';
import { CreateTrussService } from 'src/app/core/services/truss/create-truss.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { FarmModalComponent } from '../farm-modal.component';

@Component({
  selector: 'app-modal-empty-truss',
  templateUrl: './modal-empty-truss.component.html',
  styleUrls: ['./modal-empty-truss.component.scss']
})
export class ModalEmptyTrussComponent extends FarmModalComponent implements OnChanges {
  selectedSeed: Seed = new Seed();

  constructor(
    public sessionStorage: SessionStorageService,
    private createTrussService: CreateTrussService
  ) {
    super(sessionStorage);
  }

  ngOnChanges(): void {
  }

  createTruss(): void {
    if (this.modalTruss._id && this.selectedSeed._id) {
      this.createTrussService.createTruss(this.modalTruss._id, this.selectedSeed._id).subscribe(async _response => {
        await this.reloadClickedTruss();
      });
    }
  }

}
