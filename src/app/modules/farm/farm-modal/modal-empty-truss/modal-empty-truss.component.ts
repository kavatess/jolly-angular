import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Seed } from 'src/app/models/seed.model';
import { CreateTrussService } from 'src/app/services/truss/create-truss.service';
import { Truss } from 'src/app/models/truss.model';

@Component({
  selector: 'app-modal-empty-truss',
  templateUrl: './modal-empty-truss.component.html',
  styleUrls: ['./modal-empty-truss.component.scss']
})
export class ModalEmptyTrussComponent implements OnInit {
  @Input() clickedTruss = new Truss();
  @Output() updateEv = new EventEmitter();
  selectedSeed: Seed = new Seed();

  constructor(private createTrussService: CreateTrussService) { }

  ngOnInit(): void { }

  createTruss(): void {
    if (this.clickedTruss._id && this.selectedSeed._id) {
      this.createTrussService.createTruss(this.clickedTruss._id, this.selectedSeed._id).subscribe(_response => {
        this.updateEv.emit();
      });
    }
  }
}
