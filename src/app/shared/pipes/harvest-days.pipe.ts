import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'harvest_days'
})
export class HarvestDaysPipe implements PipeTransform {

  transform(harvestDate: string): number {
    let harvestTime = new Date(harvestDate).getTime() - new Date().getTime();
    if (harvestTime < 0) {
      harvestTime *= -1;
    }
    return Number(Number(harvestTime / 86400000).toFixed(0));
  }

}
