import { Component, OnInit } from '@angular/core';
import { FarmComponent } from '../farm.component';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent extends FarmComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
