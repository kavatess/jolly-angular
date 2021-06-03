import { Component, OnInit } from '@angular/core';
import { DEFAULT_STATISTIC_REQ_BODY } from 'src/app/app-constants';
import { Statistics } from '../../../models/statistic.model';
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

  changeStatArr({ block, plantGrowth, plantId }: any = DEFAULT_STATISTIC_REQ_BODY): void {
    this.statArr = [];
    this.getStatisticService.getFarmStatistics(block, plantGrowth, plantId).subscribe(newStats => {
      this.statArr = newStats;
    });
  }
}