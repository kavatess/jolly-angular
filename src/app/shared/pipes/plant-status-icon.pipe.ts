import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plantStatusIcon'
})
export class PlantStatusIconPipe implements PipeTransform {

  transform(growth: any): string | null {
    if (typeof growth === 'number') {
      return growth === 3 ? 'fas fa-tractor' : 'fas fa-seedling';
    }
    
    if (typeof growth === 'boolean') {
      return growth ? 'fas fa-tractor' : 'fas fa-seedling';
    }
  }

}
