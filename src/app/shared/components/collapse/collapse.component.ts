import { Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements DoCheck {
  @Input() collapseId = '';

  constructor() { }

  ngDoCheck(): void {
    const collapseBtn = $(`#btn-${this.collapseId}`);
    collapseBtn.attr('data-target', `#${this.collapseId}`);
    collapseBtn.attr('aria-controls', this.collapseId);
  }
}
