import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SignUpService } from '../../services/sign-up.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { SendOtpService } from '../../services/send-otp.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  show: boolean = false;
  password: string = 'password';
  handleLoginBtn :any= false;


  constructor(
    private login: SignUpService,
    private router: Router,
    private sendOtpService: SendOtpService
  ) {}

  toggleShowButton() {
    this.show = !this.show;
    this.password = this.show ? 'text' : 'password';
  }

  handleLogin(phoneOrEmail: any, password: any) {
    this.handleLoginBtn = true;
    const userInfo = {
      email: phoneOrEmail.value,
      password: password.value,
    };
    try {
      this.login.postUserDataForAuth(userInfo).subscribe({
        next: async (response: any) => {
          if (response.userFound) {
            localStorage.setItem(
              'userInfo',
              JSON.stringify({
                userFound: response.userFound,
                userId: response.userId,
                userEmail: phoneOrEmail.value,
              })
            );

            // sendOtp To user
            this.sendOtpService
              .sentOtpOnMail({ email: phoneOrEmail.value })
              .subscribe({
                next: (response: any) => {
                  if (response.otpSend) {
                    Swal.fire(
                      'OTP Sent',
                      'Check your email for the OTP.',
                      'success'
                    );
                    this.handleLoginBtn = false;
                    this.router.navigate(['otpComponent']);
                  } else {
                    Swal.fire('Error', response.msg, 'error');
                    this.handleLoginBtn = false;
                  }
                },
                error: (err) => {
                  console.error('Error while sending OTP:', err);
                  Swal.fire('Error', 'Failed to send OTP. Try again.', 'error');
                  this.handleLoginBtn = false;
                },
              });
          } else if (response.userFound == false) {
            Swal.fire('error', 'User Not Found', 'error');
            this.handleLoginBtn = false;
          } else if (response.password === false) {
            Swal.fire('error', 'password not matched', 'error');
            this.handleLoginBtn = false;
          }
        },
      });
    } catch (error) {
      console.log('something went wrong to send login data in backend');
    }
  }
}
