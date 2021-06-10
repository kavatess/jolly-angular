import { Injectable } from '@angular/core';
import { Truss } from 'src/app/models/truss.model';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  private _isReloading = true;
  private _selectedPlantGrowth = 0;
  private _selectedPlantId = '';
  private _clickedTruss: Truss = new Truss();

  constructor() { }

  get isReloading(): boolean {
    return this._isReloading;
  }
  get selectedPlantGrowth(): number {
    return this._selectedPlantGrowth;
  }
  get selectedPlantId(): string {
    return this._selectedPlantId;
  }
  get clickedTruss(): Truss {
    return this._clickedTruss;
  }

  emitClickedTruss(newClickedTruss: Truss): void {
    this._clickedTruss = newClickedTruss;
  }

  startReloading(): void {
    this._isReloading = true;
  }

  finishReloading(): void {
    this._isReloading = false;
  }

  handleSelectOnChanges({ plantGrowth, plantId }: any): void {
    this._selectedPlantGrowth = plantGrowth;
    this._selectedPlantId = plantId;
  }

  handleUpdateTrussEv(updatedTruss: Truss): void {
    this.emitClickedTruss(updatedTruss);
    this.startReloading();
  }
}
