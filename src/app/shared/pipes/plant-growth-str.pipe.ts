import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plant_growth_str'
})
export class PlantGrowthStrPipe implements PipeTransform {

  transform(plantGrowth: number): string {
    if (plantGrowth == 3) {
      return "Đang thu hoạch";
    }
    if (plantGrowth == 2) {
      return "Cây trung";
    }
    return "Cây con";
  }

}
