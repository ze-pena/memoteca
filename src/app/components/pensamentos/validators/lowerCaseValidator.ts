import { AbstractControl } from "@angular/forms";

export function lowerCaseValidator(control: AbstractControl) {
  const input = control.value as string

  if (input !== input?.toLowerCase()) {
    return {  lowercase: true }
  } else {
    return null
  }
}
