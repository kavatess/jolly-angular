import { AfterContentChecked, Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements AfterContentChecked {
  @Input() collapseId = '';
  @Input() headerContent = '';
  active = false;

  constructor() { }

  ngAfterContentChecked(): void {
    const collapseBtn = $('#btn-' + this.collapseId);
    collapseBtn.attr('data-target', `#${this.collapseId}`);
    collapseBtn.attr('aria-controls', this.collapseId);
  }
}
