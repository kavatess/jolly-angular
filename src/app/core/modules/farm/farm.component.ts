import { Component, OnInit } from '@angular/core';
import { FARM_LAST_BLOCK_COLLECTION } from 'src/app/app-constants';
import { SessionService } from 'src/app/shared/services/session.service';
import { Truss } from '../../models/truss.model';
import { GetPlantDataService } from '../../services/plant/get-plant-data.service';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  private _dataReady = false;
  private _selectedBlock = '';
  private _selectedPlantId = '';
  private _selectedPlantGrowth = 0;
  private _clickedTruss: Truss = new Truss();

  constructor(protected sessionStorage: SessionService, protected getPlantService: GetPlantDataService) { }

  get dataReady(): boolean {
    return this._dataReady;
  }

  get selectedBlock(): string {
    return this._selectedBlock;
  }

  get selectedPlantId(): string {
    return this._selectedPlantId;
  }

  get selectedPlantGrowth(): number {
    return this._selectedPlantGrowth;
  }

  get clickedTruss(): Truss {
    return this._clickedTruss;
  }

  changeDataReadyTo(status: boolean): void {
    this._dataReady = status;
  }

  private changeSelectedBlock(newBlock: string): void {
    this._selectedBlock = newBlock;
  }

  private changeSelectedPlantId(newPlantId: string): void {
    this._selectedPlantId = newPlantId;
  }

  private changeSelectedPlantGrowth(newPlantGrowth: number): void {
    this._selectedPlantGrowth = Number(newPlantGrowth);
  }

  changeClickedTruss(newClickedTruss: Truss): void {
    this._clickedTruss = newClickedTruss;
  }

  selectChangeHandler({ block, plantId, plantGrowth }: any): void {
    this.changeSelectedBlock(block);
    this.changeSelectedPlantId(plantId);
    this.changeSelectedPlantGrowth(plantGrowth);
  }

  trussUpdatedEvHandler(newClickedTruss: Truss): void {
    this.changeClickedTruss(newClickedTruss);
    this.changeDataReadyTo(false);
  }

  ngOnInit(): void {
    const lastBlock = this.sessionStorage.retrieve(FARM_LAST_BLOCK_COLLECTION) || 'A';
    this.changeSelectedBlock(lastBlock);
  }
}