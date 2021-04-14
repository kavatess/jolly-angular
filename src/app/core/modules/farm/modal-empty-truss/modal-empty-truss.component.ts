import { Component, Input, OnChanges } from '@angular/core';
import { Seed } from 'src/app/core/models/seed.model';
import { CreateTrussService } from 'src/app/core/services/truss/create-truss.service';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-modal-empty-truss',
  templateUrl: './modal-empty-truss.component.html',
  styleUrls: ['./modal-empty-truss.component.scss']
})
export class ModalEmptyTrussComponent implements OnChanges {
  @Input() trussId = '';
  selectedSeed: Seed = new Seed();

  constructor(
    public sessionStorage: SessionStorageService,
    private createTrussService: CreateTrussService
  ) { }

  ngOnChanges(): void {
  }

  createTruss(): void {
    if (this.trussId && this.selectedSeed._id) {
      this.createTrussService.createTruss(this.trussId, this.selectedSeed._id).subscribe(_response => {
        location.reload();
      });
    }
  }

}
