import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function getNumberInputValidator(min: number = null, max: number = null): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const number = Number(control.value);
        if (isNaN(number)) {
            return { invalidNumber: { value: control.value } };
        }
        if (min != null) {
            return number < min ? { smallerThanMin: { value: control.value } } : null;
        }
        if (max != null) {
            return number > max ? { greaterThanMax: { value: control.value } } : null;
        }
        return null;
    };
}