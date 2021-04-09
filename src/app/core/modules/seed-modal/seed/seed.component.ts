import { Component, Input, OnInit } from '@angular/core';
import { Seed, BasicSeedInfo } from 'src/app/core/models/seed.model';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.component.html',
  styleUrls: ['./seed.component.scss']
})
export class SeedComponent implements OnInit {
  @Input() seedIndex = -1;
  @Input() seedEl: BasicSeedInfo = new Seed();
  @Input() seedNumberVisible = true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.seedEl);
    // if (!this.seedEl._id) {
    //   this.createSeedForm = new FormGroup({
    //     plantId: new FormControl(''),
    //     startDate: new FormControl(new Date().toString()),
    //     plantNumber: new FormControl(300, [
    //       Validators.required,
    //       Validators.maxLength(4)
    //     ])
    //   })
    // }
  }

}
