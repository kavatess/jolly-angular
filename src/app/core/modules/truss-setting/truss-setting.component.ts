import { Component, OnInit } from '@angular/core';
import { BLOCK_ARR, SESSION_STORAGE_KEY } from 'src/app/app-constants';
import { SessionService } from 'src/app/shared/services/session.service';
import { TrussHistoryInfo, RawTruss } from '../../../models/truss.model';
import { GetHistoryDataService } from '../../services/truss/get-history-data.service';

@Component({
  selector: 'app-truss-setting',
  templateUrl: './truss-setting.component.html',
  styleUrls: ['./truss-setting.component.scss']
})
export class TrussSettingComponent implements OnInit {
  blockArr: string[] = BLOCK_ARR;
  trussArr: RawTruss[] = [];
  selectedTruss: RawTruss = null;
  historyArr: TrussHistoryInfo[] = [];

  constructor(private sessionStorage: SessionService, private getHistoryService: GetHistoryDataService) { }

  ngOnInit(): void {
    this.changeBlock(this.blockArr[0]);
  }

  async changeBlock(block: string, trussId: string = null): Promise<void> {
    this.trussArr = await this.sessionStorage.getAsync(SESSION_STORAGE_KEY.RAW_TRUSS + block);
    this.selectTruss(trussId || this.trussArr[0]._id);
  }

  selectTruss(trussId: string): void {
    this.selectedTruss = this.trussArr.find(({ _id }) => _id == trussId);
    $('#max-hole-ip').attr('value', this.selectedTruss.maxHole);
    this.getHistoryService.getHistoryDataById(trussId).subscribe(historyArr => {
      this.historyArr = historyArr;
    });
  }
}