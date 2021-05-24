import { ValidatorFn, Validators } from "@angular/forms";

export function getStringInputValidator(): ValidatorFn[] {
    return [Validators.required, Validators.maxLength(256)];
}