import { ValidatorFn } from "@angular/forms";

export class FormControlInfo {
    label: string;
    name: string;
    type: string;
    value: any;
    options!: Option[];
    validators!: ValidatorFn[]
}

export interface Option {
    name: string;
    value: string;
}