import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Truss } from 'src/app/core/models/truss.model';
import { SessionStorageService } from 'src/app/shared/services/session-storage.service';

@Component({
    template: '',
})
export class ReloadClickedTrussComponent {
    @Input() clickedTruss: Truss = new Truss();
    @Output() newClickedTruss = new EventEmitter<Truss>();

    constructor(protected sessionStorage: SessionStorageService) { }

    protected async reloadClickedTruss(): Promise<void> {
        await this.sessionStorage.reset(this.clickedTruss.block);
        const newClickedTruss = this.sessionStorage.trussData[this.clickedTruss.block].find(truss => truss._id == this.clickedTruss._id);
        this.newClickedTruss.emit(newClickedTruss);
    }
}
