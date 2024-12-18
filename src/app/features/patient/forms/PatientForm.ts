import { Validators, FormGroup, FormControl } from '@angular/forms';
import { beforeToday } from '../../../shared/validators/before-today';

export const PatientForm = new FormGroup({
  lastName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(123)]),
  firstName: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(123)]),
  email: new FormControl(null, [Validators.email]),
  phoneNumber: new FormControl(null),
  birthDate: new FormControl(null, [Validators.required, beforeToday]),
  mutuelle: new FormControl(null, [Validators.minLength(2), Validators.maxLength(150)]),
  info_supplement: new FormControl(null, [Validators.maxLength(1000)]),
  address: new FormGroup({
    street: new FormControl(null, [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    streetNumber: new FormControl(null, [Validators.required]),
    zipCode: new FormControl(null, [Validators.required]),
  }),
});
