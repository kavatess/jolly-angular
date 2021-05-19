import { Component, OnInit } from '@angular/core';
import { SEED_SESSION_COLLECTION } from 'src/app/app-constants';
import { Seed } from 'src/app/core/models/seed.model';
import { CreateTrussService } from 'src/app/core/services/truss/create-truss.service';
import { SessionService } from 'src/app/shared/services/session.service';
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
    protected sessionStorage: SessionService,
    private createTrussService: CreateTrussService
  ) {
    super(sessionStorage);
  }

  ngOnInit(): void {
    this.readySeed = this.sessionStorage.retrieve(SEED_SESSION_COLLECTION) || [];
    this.readySeed = this.readySeed.filter(({ isReadySeed }) => isReadySeed);
  }

  createTruss(): void {
    if (this.clickedTruss._id && this.selectedSeed._id) {
      this.createTrussService.createTruss(this.clickedTruss._id, this.selectedSeed._id).subscribe(async (_response) => {
        await this.reloadData();
      });
    }
  }
}
