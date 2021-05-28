import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Truss } from 'src/app/models/truss.model';
import { FarmComponent } from '../farm.component';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-farm-block',
  templateUrl: './farm-block.component.html',
  styleUrls: ['./farm-block.component.scss']
})
export class FarmBlockComponent implements OnInit, DoCheck {
  trussArr: Truss[] = [];
  @Input() block = '';
  @Input() farmComponent: FarmComponent = null;

  constructor(private farmService: FarmService) { }

  async ngOnInit(): Promise<void> {
    this.trussArr = await this.farmService.getTrussArrByBlock(this.block);
    this.farmComponent.changeDataReadyTo(true);
  }

  ngDoCheck(): void {
    if (!this.farmComponent.dataReady) {
      this.ngOnInit();
    }
  }
}