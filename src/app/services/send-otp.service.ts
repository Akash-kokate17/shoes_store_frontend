import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SendOtpService {
  constructor(private http: HttpClient) {}

  sentOtpOnMail(userMailOrPhone: any) {
    return this.http.post('http://localhost:5000/authController/sendOtp', userMailOrPhone);
  }

  verifyOtp(otp:number,userId:any) {
    return this.http.post('http://localhost:5000/authController/verifyOtp', {
      otp: otp,
      userId: userId,
    });
  };

}
