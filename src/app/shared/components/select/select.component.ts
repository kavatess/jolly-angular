import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LAST_BLOCK_SESSION_COLLECTION } from 'src/app/app-constants';
import { SessionStorageService } from '../../services/session-storage.service';

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
    if (!this.isStatisticPage) {
      const lastBlock = window.sessionStorage.getItem(LAST_BLOCK_SESSION_COLLECTION);
      this.selectGroup.setControl('block', new FormControl(lastBlock || 'A'));
    }
  }

  emitSelectValOnChange(): void {
    this.subscription = this.selectGroup.valueChanges.subscribe(changeVal => {
      if (!this.isStatisticPage) {
        window.sessionStorage.setItem('last-block-stat', changeVal.block);
      }
      changeVal.plantGrowth *= 1;
      this.selectChange.emit(changeVal.value);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
