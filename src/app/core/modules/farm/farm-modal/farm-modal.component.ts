import { Component, Input, OnInit } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-farm-modal',
  templateUrl: './farm-modal.component.html',
  styleUrls: ['./farm-modal.component.scss']
})
export class FarmModalComponent implements OnInit {
  @Input() clickedTruss: Truss;
  constructor() { }

  ngOnInit(): void {
  }

}
