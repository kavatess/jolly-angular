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
  selectedTruss: Truss = new Truss();

  constructor(private sessionStorage: SessionService) { }

  ngOnInit(): void {
    this.changeBlock(this.blockArr[0]);
  }

  async changeBlock(block: string) {
    this.trussArr = await this.sessionStorage.getAsync(TRUSS_SESSION_COLLECTION + block);
    this.trussArr = this.trussArr.filter(truss => truss != null).sort((a, b) => a.index - b.index);
    this.selectTruss(this.trussArr[0]._id);
  }

  selectTruss(trussId: string): void {
    this.selectedTruss = this.trussArr.find(({ _id }) => _id == trussId);
    $('#max-hole-ip').attr('value', this.selectedTruss.maxHole);
  }
}