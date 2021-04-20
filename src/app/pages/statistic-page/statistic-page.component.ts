import { Component, OnInit } from '@angular/core';
import { GetStatisticService } from 'src/app/core/services/truss/get-statistic.service';

@Component({
  selector: 'app-statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  statArr: Statistics[] = [];
  constructor(private getStatisticService: GetStatisticService) { }

  async ngOnInit() {
    this.statArr = await this.getStatisticService.getFarmStatistics().toPromise();
  }

}

export interface Statistics {
  plantName: string;
  plantColor: string;
  plantNumber: number;
}