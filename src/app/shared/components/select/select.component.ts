import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionStorageService } from 'ngx-webstorage';
import { Subscription } from 'rxjs';
import { FARM_LAST_BLOCK_COLLECTION, STAT_LAST_BLOCK_COLLECTION } from 'src/app/app-constants';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnDestroy {
  @Input() isStatisticPage = false;
  selectGroup = new FormGroup({
    block: new FormControl(''),
    plantId: new FormControl(''),
    plantGrowth: new FormControl(0)
  });
  subscription = new Subscription();
  @Output() selectChange = new EventEmitter();

  constructor(public sessionService: SessionStorageService) { }

  ngOnInit(): void {
    this.getLastBlockVal();
    this.selectChange.emit(this.selectGroup.value); // Emit the first default value
    this.emitSelectValOnChange();
  }

  getLastBlockVal(): void {
    let lastBlock = '';
    if (this.isStatisticPage) {
      lastBlock = this.sessionService.retrieve(STAT_LAST_BLOCK_COLLECTION) || '';
    } else {
      lastBlock = this.sessionService.retrieve(FARM_LAST_BLOCK_COLLECTION) || 'A';
    }
    this.selectGroup.setControl('block', new FormControl(lastBlock));
  }

  emitSelectValOnChange(): void {
    this.subscription = this.selectGroup.valueChanges.subscribe(changeVal => {
      if (this.isStatisticPage) {
        this.sessionService.store(STAT_LAST_BLOCK_COLLECTION, changeVal.block);
      } else {
        this.sessionService.store(FARM_LAST_BLOCK_COLLECTION, changeVal.block);
      }
      changeVal.plantGrowth *= 1;
      this.selectChange.emit(changeVal);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
