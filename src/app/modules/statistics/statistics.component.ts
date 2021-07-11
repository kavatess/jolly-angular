import { Component, OnInit } from '@angular/core';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { FormControlInfo, MultipleSelectControlInfo } from 'src/app/models/form-control.model';
import { Plant } from 'src/app/models/plant.model';
import { NavElement } from 'src/app/shared/components/nav-bar/nav-bar.component';
import { SessionService } from 'src/app/shared/services/session.service';
import { Statistics } from 'src/app/models/statistic.model';
import { GetStatisticService } from 'src/app/services/truss/get-statistic.service';
import { HarvestStatColumnChartService } from './services/harvest-stat-column-chart.service';
import { PlantPercentPieChartService } from './services/plant-percent-pie-chart.service';
import { TotalStatBarChartService } from './services/total-stat-bar-chart.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  readonly navArr: NavElement[] = [
    new NavElement(0, "Thống kê tổng hợp"),
    new NavElement(1, "Thống kê theo mùa vụ")
  ];
  tabIndex = 0;
  controlArr: FormControlInfo[] = [];
  trussTotalStatArr: Statistics[] = [];
  harvestStatObj = null;

  constructor(
    private getStatisticService: GetStatisticService,
    private sessionStorage: SessionService,
    public trussTotalBarChart: TotalStatBarChartService,
    public plantPercentPieChart: PlantPercentPieChartService,
    public harvestStatColumnChart: HarvestStatColumnChartService
  ) { }

  changeTab(tabIndex: number): void {
    this.tabIndex = tabIndex;
    if (tabIndex == 1) this.harvestStatObj = null;
  }

  ngOnInit(): void {
    this.initControlArr();
    this.initStatArr();
  }

  private async initControlArr() {
    const plantArr: Plant[] = await this.sessionStorage.getAsync(SESSION_STORAGE_KEY.PLANT);
    this.controlArr = [
      new FormControlInfo({
        label: 'Chọn tháng thống kê',
        name: 'month',
        type: 'month',
      }),
      new MultipleSelectControlInfo({
        label: 'Chọn cây trồng',
        name: 'plantIdArr',
        defaultVal: [],
        options: plantArr.map(({ _id, plantName }) => {
          return { name: plantName, value: _id };
        })
      })
    ];
  }

  private initStatArr(): void {
    const lastBlock = this.sessionStorage.retrieve(SESSION_STORAGE_KEY.STAT_LAST_BLOCK) || 'A';
    this.changeTotalStatArr({ block: lastBlock });
  }

  changeTotalStatArr(filterOptions: any): void {
    this.trussTotalStatArr = [];
    this.getStatisticService.getTrussTotalStatistics(filterOptions).subscribe(newStats => {
      this.trussTotalStatArr = newStats;
    });
  }

  changeHarvestStatArr(filterOpitons: { month: string, plantIdArr: string[] }): void {
    this.harvestStatObj = null;
    this.getStatisticService.getHarvestStats(filterOpitons).subscribe(harvestStats => {
      this.harvestStatObj = harvestStats;
    });
  }
}