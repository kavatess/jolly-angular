import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function getNumberInputValidator(minLength: number = 1, maxLength: number = 32): ValidatorFn[] {
    const numberValidator = (control: AbstractControl): ValidationErrors | null => {
        if (isNaN(control.value)) {
            return { invalidNumber: { value: control.value } };
        }
        return null;
    };
    return [Validators.required, numberValidator, Validators.minLength(minLength), Validators.maxLength(maxLength)];
}