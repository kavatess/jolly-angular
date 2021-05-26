import { ValidatorFn } from "@angular/forms";
import { getNumberInputValidator } from "src/app/shared/validators/number-input.validator";
import { getStringInputValidator } from "src/app/shared/validators/string-input.validator";

export class FormControlInfo {
    label: string;
    name: string | null;
    type: string;
    defaultVal: any;
    options!: Option[];
    validators!: ValidatorFn[]
    constructor(control: {
        label?: string,
        name?: string,
        type?: string,
        defaultVal?: string,
        options?: Option[],
        validators?: ValidatorFn[]
    }) {
        this.label = control.label;
        this.name = control.name || null;
        this.type = control.type;
        this.defaultVal = control.defaultVal || null;
        this.options = control.options || [];
        this.validators = control.validators || [];
    }
}

export class TextControlInfo extends FormControlInfo {
    type = 'text';
    validators = getStringInputValidator();
}

export class PasswordControlInfo extends FormControlInfo {
    type = 'password';
    validators = getStringInputValidator(8, 32);
}

export class NumberControlInfo extends FormControlInfo {
    type = 'number';
    constructor(control: {
        label?: string,
        name?: string,
        type?: string,
        defaultVal?: string,
        options?: Option[],
        validators?: ValidatorFn[],
        maxLength?: number,
        minLength?: number
    }) {
        super(control);
        this.validators = getNumberInputValidator(control.minLength || 1, control.maxLength || 32);
    }
}

export class SelectControlInfo extends FormControlInfo {
    type = 'select';
}

export class FileControlInfo extends FormControlInfo {
    type = 'file';
}

export interface Option {
    name: string;
    value: string;
}