import { Component, Input, OnInit } from '@angular/core';
import { History, RawTruss } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-truss-history-list',
  templateUrl: './truss-history-list.component.html',
  styleUrls: ['./truss-history-list.component.scss']
})
export class TrussHistoryListComponent implements OnInit {
  @Input() historyArr: History[] = [];
  @Input() truss: RawTruss = null;

  constructor() { }

  ngOnInit(): void {
  }
}