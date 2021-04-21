import { Component, OnChanges } from '@angular/core';
import { StatisticPageComponent } from 'src/app/pages/statistic-page/statistic-page.component';
import { GetStatisticService } from '../../services/truss/get-statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent extends StatisticPageComponent implements OnChanges {

  constructor(protected getStatisticService: GetStatisticService) {
    super(getStatisticService)
  }

  ngOnChanges(): void { }

}