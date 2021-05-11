import { Component, Input, OnInit } from '@angular/core';
import { History } from 'src/app/core/models/truss.model';

@Component({
  selector: 'app-truss-timeline',
  templateUrl: './truss-timeline.component.html',
  styleUrls: ['./truss-timeline.component.scss']
})
export class TrussTimelineComponent implements OnInit {
  @Input() history: History = null;
  @Input() maxHole = 0;

  constructor() { }

  ngOnInit(): void { }
}