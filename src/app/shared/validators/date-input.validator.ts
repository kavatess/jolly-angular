import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function getDateInputValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const date = new Date(control.value).toString();
        return date != "Invalid Date" ? { invalidDate: { value: control.value } } : null;
    };
}