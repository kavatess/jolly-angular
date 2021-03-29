import { Component, OnInit } from '@angular/core';
import { FarmPageComponent } from 'src/app/pages/farm-page/farm-page.component';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent extends FarmPageComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}