import { Component, OnInit } from '@angular/core';
import { BLOCK_ARR, TRUSS_SESSION_COLLECTION } from 'src/app/app-constants';
import { SessionService } from 'src/app/shared/services/session.service';
import { Truss } from '../../models/truss.model';

@Component({
  selector: 'app-truss-setting',
  templateUrl: './truss-setting.component.html',
  styleUrls: ['./truss-setting.component.scss']
})
export class TrussSettingComponent implements OnInit {
  blockArr: string[] = BLOCK_ARR;
  trussArr: Truss[] = [];

  constructor(private sessionStorage: SessionService) { }

  ngOnInit(): void {
    this.changeBlock(this.blockArr[0]);
  }

  async changeBlock(block: string) {
    this.trussArr = await this.sessionStorage.getAsync(TRUSS_SESSION_COLLECTION + block);
    this.trussArr.filter(truss=>truss._id).sort((a, b) => a.index - b.index);
  }
}
