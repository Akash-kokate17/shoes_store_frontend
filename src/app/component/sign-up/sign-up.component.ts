import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import passwordValidator from '../../utils/passwordValidator';
import { SignUpService } from '../../services/sign-up.service';
import { exhaustMap, map, of, tap } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signUpServices: SignUpService,
    private router:Router
  ) {
    this.signUpForm = this.formBuilder.group({
      fName: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(2),
      ]),
      lName: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(2),
      ]),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, passwordValidator()]),
      cnfPass: new FormControl('', [Validators.required]),
    });
  }

  async handleSignUp(form: any) {

    // check first user already exist or not if not then add user in database
    const userExist = this.signUpServices
      .fetchRegisterUser()
      .pipe(
        map((response: any) => {
          return Object.values(response.users).some(
            (user: any) =>
              user.email == form.controls['email'].value &&
              user.phoneNo == form.controls['phoneNo'].value
          );
        })
      )
      .subscribe({
        next: (response: any) => {
          if (response) {
            Swal.fire('User already exits');
            return;
          }
        },
      });

    const checkInputIsNotEmpty = Object.values(form.value).every(
      (control: any) => control !== ''
    );

    const password = form.controls['password'].value;
    const passwordValid =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/.test(
        password
      );

    const phoneNo = form.controls['phoneNo'].value;
    const phoneNoValid = /^[8-9]\d{9}$/.test(phoneNo);

    if(!phoneNoValid){
      Swal.fire('Phone Number Is Invalid');
      return
    }

    const emailRegExp = form.controls['email'].value.includes('@gmail.com');

    const checkBothPass = password === form.controls['cnfPass'].value;

    const checkPhoneNo = form.controls['phoneNo'].value.length == 10;

    const CheckName = form.controls['fName'].value.length >= 2;
    const CheckLastName = form.controls['lName'].value.length >= 2;

    if (
      checkInputIsNotEmpty &&
      passwordValid &&
      emailRegExp &&
      checkBothPass &&
      checkPhoneNo &&
      CheckName &&
      CheckLastName &&
      phoneNoValid
    ) {
      const userData = {
        userName: form.controls['fName'].value,
        sirName: form.controls['lName'].value,
        phoneNo: form.controls['phoneNo'].value,
        email: form.controls['email'].value,
        password: form.controls['password'].value,
      };
      of(userData)
        .pipe(
          exhaustMap((data: any) => {
            return this.signUpServices.postUserData(data).pipe(
              tap({
                next: (response: any) => {
                  Swal.fire(
                    'Success',
                    'User signed up successfully!',
                    'success'
                  );
                  this.signUpForm.reset();
                  this.router.navigate(['/login'])
                },
                error: (error: any) => {
                  Swal.fire(
                    'Error',
                    'Failed to sign up. Please try again.',
                    'error'
                  );
                },
              })
            );
          })
        )
        .subscribe();
    } else {
      Swal.fire('All Filed Are Mandatory');
    }
  }
}
