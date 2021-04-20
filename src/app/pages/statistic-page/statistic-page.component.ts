import { Component, OnInit } from '@angular/core';
import { DEFAULT_STATISTIC_QUERY } from 'src/app/app-constants';
import { Statistics } from 'src/app/core/models/statistic.model';
import { GetStatisticService } from 'src/app/core/services/truss/get-statistic.service';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  private static statArr: Statistics[] = [];

  constructor(protected getStatisticService: GetStatisticService) { }

  get statArr(): Statistics[] {
    return StatisticPageComponent.statArr;
  }
  set newStatArr(filteredStats: Statistics[]) {
    StatisticPageComponent.statArr = filteredStats;
  }
  async selectOnChange(reqQuery: any) {
    await this.ngOnInit(reqQuery);
  }

  async ngOnInit(reqQuery: any = DEFAULT_STATISTIC_QUERY) {
    this.newStatArr = [];
    this.newStatArr = await this.getStatisticService.getFarmStatistics(reqQuery).toPromise();
  }

}