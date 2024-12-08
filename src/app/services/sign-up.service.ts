import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiBaseUrl } from '../../../backendUrl';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}


  // postUserData is for post data in userregisters in database
  postUserData = (user: any) => {
    return this.http.post(
      `${apiBaseUrl}/authController/register`,
      user
    );
  };

 // fetchRegisterUser is for get all data in userregisters database to check user is already exists
  fetchRegisterUser = () => {
    return this.http.get(`${apiBaseUrl}/registerUser`);
  };

  // post user data to login auth 
   
  postUserDataForAuth = (userInfo:any)=>{
    return this.http.post(`${apiBaseUrl}/authController/login`,userInfo)
  }
}
