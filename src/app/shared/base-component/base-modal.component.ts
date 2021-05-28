import { Component, OnInit } from '@angular/core';

@Component({
    template: ''
})
export abstract class BaseModalComponent implements OnInit {
    private _isOnReload = false;

    constructor() { }

    get isOnReload(): boolean {
        return this._isOnReload;
    }
    changeReloadStatus(status: boolean): void {
        this._isOnReload = status
    }

    ngOnInit(): void {
        this._isOnReload = false;
    }

    protected abstract reloadData(): Promise<void>;
}