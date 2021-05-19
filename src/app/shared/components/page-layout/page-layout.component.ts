import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss', '../modal/modal.component.scss']
})
export class PageLayoutComponent implements OnChanges {
  @Input() hasHeader = true;
  @Input() hasFooter = true;
  @Input() scroll = false;
  @Input() onLoad = true;
  @Input() loadTimeOut = 0;
  constructor() { }

  ngOnChanges(): void {
    if (this.loadTimeOut > 0 && this.onLoad) {
      setTimeout(() => {
        this.onLoad = false;
      }, this.loadTimeOut)
    }
  }

}
