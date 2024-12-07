import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SendOtpService } from '../../services/send-otp.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
})
export class OtpComponent {
  otp_input: any;
  constructor(private sendOtpService: SendOtpService, private router: Router) {}

  verifyOtp() {
    const userInfoString = localStorage.getItem('userInfo');
    if (!userInfoString) {
      Swal.fire('Error', 'User not found. Please log in again.', 'error');
      return;
    }

    const userInfo = JSON.parse(userInfoString);
    if (!userInfo || !userInfo.userId) {
      Swal.fire(
        'Error',
        'User information is missing. Please log in again.',
        'error'
      );
      return;
    }

    const userOtpAndEmail = {
      otp: parseInt(this.otp_input),
      userId: userInfo.userId,
    };

    this.sendOtpService
      .verifyOtp(userOtpAndEmail.otp, userOtpAndEmail.userId)
      .subscribe({
        next: (response: any) => {
          if (response.auth) {
            localStorage.setItem("userLogin",JSON.stringify(response.userLogin))
            this.router.navigate(['home']);
          } else {
            Swal.fire('otp not matched');
          }
        },
      });
  }

  generateOtp() {
    const userInfo = localStorage.getItem('userInfo');
    const user = userInfo ? JSON.parse(userInfo) : null;

    if (user === null) {
      return Swal.fire('error', 'plz login again user data not found', 'error');
    }

    if (user.userEmail) {
      return this.sendOtpService.sentOtpOnMail({email:user.userEmail}).subscribe({
        next: (response:any) => {
        if(response.user_login){
          Swal.fire('success', 'otp send to your mail', 'success');
        }else {
          Swal.fire('Error', 'Failed to send OTP. Try again.', 'error');
        }
        },
      });
    } else {
      return Swal.fire('something went wrong to send otp');
    }
  }
}
