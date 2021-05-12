import { Component, Input, OnInit } from '@angular/core';
import { RawTruss } from 'src/app/core/models/truss.model';
import { RevertStatusService } from 'src/app/core/services/truss/revert-status.service';

@Component({
  selector: 'app-modal-revert-status',
  templateUrl: './modal-revert-status.component.html',
  styleUrls: ['./modal-revert-status.component.scss']
})
export class ModalRevertStatusComponent implements OnInit {
  @Input() truss: RawTruss = null;

  constructor(private revertStatusService: RevertStatusService) { }

  ngOnInit(): void {
  }

  revertStatus():void{
    
  }

}
