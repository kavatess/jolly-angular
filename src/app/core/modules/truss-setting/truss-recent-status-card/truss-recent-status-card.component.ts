import { Component, Input, OnInit } from '@angular/core';
import { RawTruss } from 'src/app/core/models/truss.model';
import { RevertStatusService } from 'src/app/core/services/truss/revert-status.service';

@Component({
  selector: 'app-truss-recent-status-card',
  templateUrl: './truss-recent-status-card.component.html',
  styleUrls: ['./truss-recent-status-card.component.scss']
})
export class TrussRecentStatusCardComponent implements OnInit {
  @Input() truss: RawTruss = null;

  constructor(private revertStatusService: RevertStatusService) { }

  ngOnInit(): void {
  }
}