import { AbstractControl, ValidatorFn } from '@angular/forms';

export default function passwordValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    let validatePass = new RegExp(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/
    );
    return validatePass.test(control.value) ? null : {invalidPass:true}
  };
}
