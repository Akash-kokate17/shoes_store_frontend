import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseUrl } from '../../../backendUrl';

@Injectable({
  providedIn: 'root',
})
export class SendOtpService {
  constructor(private http: HttpClient) {}

  sentOtpOnMail(userMailOrPhone: any) {
    return this.http.post(`${apiBaseUrl}/authController/sendOtp`, userMailOrPhone);
  }

  verifyOtp(otp:number,userId:any) {
    return this.http.post(`${apiBaseUrl}/authController/verifyOtp`, {
      otp: otp,
      userId: userId,
    });
  };

}
