import { Component, OnInit } from '@angular/core';

@Component({
    template: ''
})
export abstract class ModalComp implements OnInit {
    private static onReloading = false;

    constructor() { }

    get onReloading(): boolean {
        return ModalComp.onReloading;
    }
    changeLoadStatus(status: boolean) {
        ModalComp.onReloading = status
    }

    ngOnInit(): void {
        ModalComp.onReloading = false;
    }

    protected abstract reloadData(): Promise<void>;

}