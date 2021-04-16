import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-farm',
  templateUrl: './farm.component.html',
  styleUrls: ['./farm.component.scss']
})
export class FarmComponent implements OnInit {
  @Input() block = '';

  constructor() { }

  ngOnInit(): void { }

}
