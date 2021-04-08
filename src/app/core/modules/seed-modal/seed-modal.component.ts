import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
  selector: 'app-seed-modal',
  templateUrl: './seed-modal.component.html',
  styleUrls: ['./seed-modal.component.scss']
})
export class SeedModalComponent implements OnInit {
  constructor(public sessionStorageService: SessionStorageService) { }

  async ngOnInit() {
  }

}
