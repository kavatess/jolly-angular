import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
    imports: [
        CommonModule,
        NgxWebstorageModule.forRoot()
    ]
})
export class ModulesModule { }