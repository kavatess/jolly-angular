import { ValidatorFn } from "@angular/forms";
import { getNumberInputValidator } from "src/app/shared/validators/number-input.validator";
import { getStringInputValidator } from "src/app/shared/validators/string-input.validator";

interface BasicControlInfo {
    label?: string,
    name?: string,
    type?: string,
    defaultVal?: any,
    options?: Option[],
    validators?: ValidatorFn[]
}

interface ControlInfoWithLengthValidator extends BasicControlInfo {
    maxLength?: number,
    minLength?: number
}

export class FormControlInfo {
    label: string;
    name: string | null;
    type: string;
    defaultVal: any;
    options: Option[];
    validators: ValidatorFn[]
    constructor(control: BasicControlInfo) {
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
    constructor(control: ControlInfoWithLengthValidator) {
        super(control);
        this.validators = getStringInputValidator(control.minLength || 1, control.maxLength || 256);
    }
}

export class PasswordControlInfo extends FormControlInfo {
    type = 'password';
    constructor(control: ControlInfoWithLengthValidator) {
        super(control);
        this.validators = getStringInputValidator(control.minLength || 8, control.maxLength || 32);
    }
}

export class NumberControlInfo extends FormControlInfo {
    type = 'number';
    constructor(control: ControlInfoWithLengthValidator) {
        super(control);
        this.validators = getNumberInputValidator(control.minLength || 1, control.maxLength || 32);
    }
}

export class SelectControlInfo extends FormControlInfo {
    type = 'select';
}

export class MultipleSelectControlInfo extends FormControlInfo {
    type = 'multiple-select';
}

export class FileControlInfo extends FormControlInfo {
    type = 'file';
}

export class Option {
    name: string;
    value: string;
    constructor(name: string, value: string) {
        this.name = name;
        this.value = value;
    }
}