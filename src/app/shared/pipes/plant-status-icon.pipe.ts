import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plant_status_icon'
})
export class PlantStatusIconPipe implements PipeTransform {

  transform(growth: any): string | null {
    if (typeof growth === 'number') {
      return growth === 3 ? 'fas fa-danger fa-tractor' : 'fas fa-success fa-seedling';
    }
    
    if (typeof growth === 'boolean') {
      return growth ? 'fas fa-danger fa-tractor' : 'fas fa-success fa-seedling';
    }
  }

}
