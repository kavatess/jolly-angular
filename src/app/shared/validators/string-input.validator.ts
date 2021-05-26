import { ValidatorFn, Validators } from "@angular/forms";

export function getStringInputValidator(minLength: number = 1, maxLength: number = 256): ValidatorFn[] {
    return [Validators.required, Validators.minLength(minLength), Validators.maxLength(maxLength)];
}