import { Component } from '@angular/core';
import { NavbarComponent } from "./component/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { SignUpComponent } from "./component/sign-up/sign-up.component";
import { LoginComponent } from "./component/login/login.component";
import { OtpComponent } from './component/otp/otp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterOutlet,
    CartComponent,
    SignUpComponent,
    LoginComponent,
    OtpComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
