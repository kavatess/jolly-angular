import { Component, Input, OnInit } from '@angular/core';
import { Statistics } from 'src/app/pages/statistic-page/statistic-page.component'

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() statArr: Statistics[] = [];
  constructor() { }

  ngOnInit(): void { }

}