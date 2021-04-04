import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnChanges {
  @Input() Id = '';
  @Input() title = '';
  constructor() { }

  ngOnChanges(): void {
  }

}
