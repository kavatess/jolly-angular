import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { Plant } from 'src/app/models/plant.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, OnDestroy {
  plantArr: Plant[] = [];
  @Input() isStatisticPage = false;
  selectGroup = new FormGroup({
    block: new FormControl(''),
    plantId: new FormControl(''),
    plantGrowth: new FormControl(0)
  });
  subscription = new Subscription();
  @Output() selectChange = new EventEmitter();

  constructor(private sessionService: SessionService) { }

  async ngOnInit() {
    this.plantArr = await this.sessionService.getAsync(SESSION_STORAGE_KEY.PLANT);
    this.emitSelectValOnChange();
    this.getLastBlockVal();
  }

  getLastBlockVal(): void {
    let lastBlock = '';
    if (this.isStatisticPage) {
      lastBlock = this.sessionService.retrieve(SESSION_STORAGE_KEY.STAT_LAST_BLOCK) || '';
    } else {
      lastBlock = this.sessionService.retrieve(SESSION_STORAGE_KEY.FARM_LAST_BLOCK) || 'A';
    }
    this.selectGroup.controls.block.setValue(lastBlock);
  }

  emitSelectValOnChange(): void {
    this.subscription = this.selectGroup.valueChanges.subscribe(changeVal => {
      if (this.isStatisticPage) {
        this.sessionService.store(SESSION_STORAGE_KEY.STAT_LAST_BLOCK, changeVal.block);
      } else {
        this.sessionService.store(SESSION_STORAGE_KEY.FARM_LAST_BLOCK, changeVal.block);
      }
      changeVal.plantGrowth *= 1;
      this.selectChange.emit(changeVal);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}