import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  constructor(private http: HttpClient) {}


  // postUserData is for post data in userregisters in database
  postUserData = (user: any) => {
    return this.http.post(
      'http://localhost:5000/authController/register',
      user
    );
  };

 // fetchRegisterUser is for get all data in userregisters database to check user is already exists
  fetchRegisterUser = () => {
    return this.http.get('http://localhost:5000/authController/registerUser');
  };

  // post user data to login auth 
   
  postUserDataForAuth = (userInfo:any)=>{
    return this.http.post('http://localhost:5000/authController/login',userInfo)
  }
}
