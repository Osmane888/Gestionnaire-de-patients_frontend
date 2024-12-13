import {AbstractControl, ValidatorFn} from '@angular/forms';

export const beforeToday = (): ValidatorFn | null => {
  return (control: AbstractControl) => {

    if (!control) {
      return null;
    }

    let date: Date = new Date(control.value);
    let now: Date = new Date();

    if (date <= now) {
      return null;
    }

    return {beforeToday: true};
  }
}
