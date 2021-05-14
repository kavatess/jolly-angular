import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { RAW_TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { RawTruss } from 'src/app/core/models/truss.model';
import { RevertStatusService } from 'src/app/core/services/truss/revert-status.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-modal-revert-status',
  templateUrl: './modal-revert-status.component.html',
  styleUrls: ['./modal-revert-status.component.scss']
})
export class ModalRevertStatusComponent implements OnChanges {
  @Input() truss: RawTruss = null;
  @Output() revertEv = new EventEmitter();
  statusIndex = -1;
  onLoad = false;

  constructor(private revertStatusService: RevertStatusService, private sessionStorage: SessionService) { }

  ngOnChanges(): void { }

  receiveStatusIndex(statusIndex: number): void {
    this.statusIndex = this.statusIndex == statusIndex ? -1 : statusIndex;
  }

  revertStatus(): void {
    if (this.statusIndex > -1) {
      this.onLoad = true;
      this.revertStatusService.revertStatus(this.truss._id, this.statusIndex).subscribe(_response => {
        this.sessionStorage.restore(RAW_TRUSS_SESSION_COLLECTION + this.truss.block);
        this.revertEv.emit();
        this.onLoad = false;
        $('.close').click();
      });
      this.statusIndex = -1;
    }
  }
}