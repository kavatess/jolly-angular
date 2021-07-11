import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { SessionService } from 'src/app/shared/services/session.service';
import { FarmService } from './farm.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  selectedBlock = '';

  constructor(private sessionStorage: SessionService, public farmService: FarmService) { }

  handleSelectOnChanges(selectVal: any): void {
    this.selectedBlock = selectVal.block;
    this.farmService.handleSelectOnChanges(selectVal);
  }

  ngOnInit(): void {
    this.selectedBlock = this.sessionStorage.retrieve(SESSION_STORAGE_KEY.FARM_LAST_BLOCK) || 'A';
  }
}