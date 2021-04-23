import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { SEED_SESSION_COLLECTION } from 'src/app/app-constants';
import { Seed } from 'src/app/core/models/seed.model';
import { GetSeedDataService } from 'src/app/core/services/seed/get-seed-data.service';
import { CreateTrussService } from 'src/app/core/services/truss/create-truss.service';
import { GetTrussByBlockService } from 'src/app/core/services/truss/get-truss-by-block.service';
import { FarmModalComponent } from '../farm-modal.component';

@Component({
  selector: 'app-modal-empty-truss',
  templateUrl: './modal-empty-truss.component.html',
  styleUrls: ['./modal-empty-truss.component.scss']
})
export class ModalEmptyTrussComponent extends FarmModalComponent implements OnInit {
  readySeed: Seed[] = [];
  selectedSeed: Seed = new Seed();

  constructor(
    protected sessionStorage: SessionStorageService,
    protected getTrussService: GetTrussByBlockService,
    private getSeedService: GetSeedDataService,
    private createTrussService: CreateTrussService
  ) {
    super(sessionStorage, getTrussService);
  }

  ngOnInit(): void {
    this.readySeed = this.sessionStorage.retrieve(SEED_SESSION_COLLECTION) || [];
    if (!this.readySeed.length) {
      this.getSeedService.getSeedData().subscribe(seedArr => {
        this.readySeed = seedArr.filter(({ isReadySeed }) => isReadySeed);
        this.sessionStorage.store(SEED_SESSION_COLLECTION, seedArr);
      });
    }
    this.readySeed = this.readySeed.filter(({ isReadySeed }) => isReadySeed);
  }

  createTruss(): void {
    if (this.clickedTruss._id && this.selectedSeed._id) {
      this.createTrussService.createTruss(this.clickedTruss._id, this.selectedSeed._id).subscribe(async (_response) => {
        await this.reloadClickedTruss();
      });
    }
  }

}
