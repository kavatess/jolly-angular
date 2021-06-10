import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { Truss } from 'src/app/models/truss.model';
import { SessionService } from 'src/app/shared/services/session.service';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent implements OnInit {
  modalReloading = false;

  constructor(private sessionStorage: SessionService, private farmService: FarmService) { }

  ngOnInit(): void { }

  get clickedTruss(): Truss {
    return this.farmService.clickedTruss;
  }

  public async reloadData(): Promise<void> {
    this.modalReloading = true;
    const newTrussArr: Truss[] = await this.sessionStorage.restore(SESSION_STORAGE_KEY.TRUSS + this.clickedTruss.block);
    const newClickedTruss = newTrussArr.find(truss => truss._id == this.clickedTruss._id);
    this.farmService.handleUpdateTrussEv(newClickedTruss);
    this.modalReloading = false;
  }
}
