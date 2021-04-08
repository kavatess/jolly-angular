import { Component, Input, OnInit } from '@angular/core';
import { Seed } from 'src/app/core/models/seed.model';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.scss']
})
export class SeedComponent implements OnInit {
  @Input() seedIndex = -1;
  @Input() seedEl: Seed = new Seed();
  @Input() seedNumberVisible = true;
  constructor() { }

  ngOnInit(): void {
  }

}
