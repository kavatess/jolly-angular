import { Pipe, PipeTransform } from '@angular/core';
import { SessionStorageService } from '../services/session-storage.service';

@Pipe({
  name: 'get_collection',
  pure: false
})
export class GetCollectionPipe implements PipeTransform {

  transform(sessionStorage: SessionStorageService, collectionName: string): any[] {
    return sessionStorage.sessionStorage[collectionName];
  }

}
