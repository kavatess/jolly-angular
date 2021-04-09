import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seed-modal',
  templateUrl: './seed-modal.component.html',
  styleUrls: ['./seed-modal.component.scss']
})
export class SeedModalComponent implements OnInit {
  private static creationMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  get creationMode(): boolean {
    return SeedModalComponent.creationMode;
  }

  set newModeValue(newMode: boolean) {
    SeedModalComponent.creationMode = newMode;
  }

}
