import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() verticalBar = false;
  @Input() striped = false;
  @Input() smallContent = false;
  @Input() height = '';
  @Input() color = '';
  @Input() content = '';
  @Input() percentage = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
