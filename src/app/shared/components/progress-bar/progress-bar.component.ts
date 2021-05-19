import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {
  @Input() verticalBar = false;
  @Input() striped = false;
  @Input() hasContent = true;
  @Input() height = '';
  @Input() color = '';
  @Input() maxHole = 0;
  @Input() plantNumber = 0;
  percentage = 0;
  content = '';

  constructor() { }

  ngOnChanges(): void {
    if (this.plantNumber && this.maxHole) {
      this.percentage = this.plantNumber / this.maxHole * 100;
      this.content = `${this.plantNumber}/ ${this.maxHole}`;
    }
  }
}