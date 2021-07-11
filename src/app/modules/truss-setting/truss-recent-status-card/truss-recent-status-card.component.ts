import { Component, Input, OnInit } from '@angular/core';
import { RawTruss } from 'src/app/models/truss.model';

@Component({
  selector: 'app-truss-recent-status-card',
  templateUrl: './truss-recent-status-card.component.html',
  styleUrls: ['./truss-recent-status-card.component.scss']
})
export class TrussRecentStatusCardComponent implements OnInit {
  @Input() truss: RawTruss = null;

  constructor() { }

  ngOnInit(): void { 
  }

}