import { Component, Input, OnChanges } from '@angular/core';
import { Seed } from 'src/app/core/models/seed.model';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-modal-empty-truss',
  templateUrl: './modal-empty-truss.component.html',
  styleUrls: ['./modal-empty-truss.component.scss']
})
export class ModalEmptyTrussComponent implements OnChanges {
  @Input() trussId = '';
  readySeedArr: Seed[] = [];
  selectedSeed: Seed = new Seed();

  constructor(public sessionStorage: SessionStorageService) { }

  async ngOnChanges() {
    this.readySeedArr = await this.sessionStorage.getReadySeedAsync();
  }

}
