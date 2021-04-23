import { Component, OnInit } from '@angular/core';
import { DEFAULT_STATISTIC_QUERY } from 'src/app/app-constants';
import { Statistics } from '../../models/statistic.model';
import { GetStatisticService } from '../../services/truss/get-statistic.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  statArr: Statistics[] = [];

  constructor(private getStatisticService: GetStatisticService) { }

  ngOnInit(): void {
    this.changeStatArr();
  }

  changeStatArr(reqQuery: any = DEFAULT_STATISTIC_QUERY): void {
    this.statArr = [];
    this.getStatisticService.getFarmStatistics(reqQuery).subscribe(newStats => {
      this.statArr = newStats;
    });
  }

}
