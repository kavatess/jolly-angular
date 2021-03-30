import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plantStatusIcon'
})
export class PlantStatusIconPipe implements PipeTransform {

  transform(plantGrowth: number): string {
    return plantGrowth == 3 ? 'fas fa-tractor' : 'fas fa-seedling';
  }

}
