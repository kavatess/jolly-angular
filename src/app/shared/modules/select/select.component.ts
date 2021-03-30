import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plant } from 'src/app/core/models/plant.model';
import { SessionStorageService } from '../../services/session-storage.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() isStatisticsPage: boolean = false;
  @Output() selectedBlock = new EventEmitter<string>();
  @Output() selectedGrowth = new EventEmitter<number>();
  @Output() selectedPlant = new EventEmitter<number>();

  plantDataArr: Plant[] = [];
  lastSelectedBlock: string = "A";
  constructor(private sessionStorageService: SessionStorageService) { }

  async ngOnInit() {
    this.plantDataArr = await this.sessionStorageService.getPlantArr();
    this.lastSelectedBlock = this.isStatisticsPage ? window.sessionStorage.getItem('last-block-stat') : window.sessionStorage.getItem('last-block-farm');
  }

  selectBlock(event: any): void {
    const blockVal: string = event.target.value;
    this.selectedBlock.emit(blockVal);
    if (this.isStatisticsPage) {
      window.sessionStorage.setItem('last-block-stat', blockVal);
    } else {
      window.sessionStorage.setItem('last-block-farm', blockVal);
    }
  }

  selectGrowth(event: any): void {
    this.selectedGrowth.emit(Number(event.target.value));
  }

  selectPlant(event: any): void {
    this.selectedPlant.emit(event.target.value);
  }

}
