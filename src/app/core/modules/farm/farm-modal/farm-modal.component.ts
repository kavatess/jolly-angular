import { Component, OnInit } from '@angular/core';
import { FarmPageComponent } from 'src/app/pages/farm-page/farm-page.component';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent extends FarmPageComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
