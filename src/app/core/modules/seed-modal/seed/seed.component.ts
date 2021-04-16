import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seed, BasicSeedInfo } from 'src/app/core/models/seed.model';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.scss']
})
export class SeedComponent implements OnInit {
  @Input() seedIndex = -1;
  @Input() seedEl: BasicSeedInfo = new Seed();
  @Input() hasClickEvent = false;
  @Output() seedElClick = new EventEmitter<BasicSeedInfo>();

  constructor() { }

  ngOnInit(): void {
  }

  seedElOnClick(seedContainerEl: any): void {
    if (this.hasClickEvent) {
      document.querySelectorAll('.seed-element-container').forEach(seedEl => {
        seedEl.classList.remove('seed-element-on-focus');
      })
      seedContainerEl.classList.add('seed-element-on-focus');
      this.seedElClick.emit(this.seedEl);
    }
  }

}
