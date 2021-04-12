import { Component, OnInit } from '@angular/core';
import { Seed } from 'src/app/core/models/seed.model';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-modal-empty-truss',
  templateUrl: './modal-empty-truss.component.html',
  styleUrls: ['./modal-empty-truss.component.scss']
})
export class ModalEmptyTrussComponent implements OnInit {
  selectedSeed: Seed = new Seed();

  constructor(public sessionStorage: SessionStorageService) { }

  ngOnInit(): void {
  }

}
