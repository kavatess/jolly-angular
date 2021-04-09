import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';
import { SeedModalComponent } from '../seed-modal.component';

@Component({
  selector: 'app-modal-seed-management',
  templateUrl: './modal-seed-management.component.html',
  styleUrls: ['./modal-seed-management.component.scss']
})
export class ModalSeedManagementComponent extends SeedModalComponent implements OnInit {

  constructor(public sessionStorageService:SessionStorageService) {
    super();
  }

  ngOnInit(): void {
  }

}
