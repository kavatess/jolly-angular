import { Component, OnInit } from '@angular/core';
import { FarmPageComponent } from 'src/app/pages/farm-page/farm-page.component';
import { Truss } from '../../models/truss.model';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent extends FarmPageComponent implements OnInit {
  private static clickedTruss: Truss = new Truss();

  constructor() {
    super();
  }

  set newClickedTruss(clickedTruss: Truss) {
    FarmComponent.clickedTruss = clickedTruss;
  }
  get clickedTruss(): Truss {
    return FarmComponent.clickedTruss;
  }

  ngOnInit(): void {
  }

}