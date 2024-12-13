import {Validators} from '@angular/forms';
import {beforeToday} from '../../../shared/validators/before-today';

export const PatientForm = {
  lastname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(123)]],
  firstname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(123)]],
  email: [null, [Validators.email]],
  phoneNumber: [null, []],
  birthDate: [null, [Validators.required, beforeToday]],
  mutuelle: [null, [Validators.minLength(2), Validators.maxLength(150)]],
  info_supplement: [null, [Validators.maxLength(1000)]],
  address: [null, []],
}
