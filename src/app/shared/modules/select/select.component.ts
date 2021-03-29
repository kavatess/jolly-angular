import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  lastSelectedBlock: string = "A";
  constructor() { }

  ngOnInit(): void {
    const selectOfFarm = window.sessionStorage.getItem('last-block-farm');
    const selectOfStat = window.sessionStorage.getItem('last-block-stat');
    this.lastSelectedBlock = this.isStatisticsPage ? selectOfStat : selectOfFarm;
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
    this.selectedPlant.emit(Number(event.target.value));
  }

}
