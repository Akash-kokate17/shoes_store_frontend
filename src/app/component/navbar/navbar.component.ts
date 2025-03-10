import { CommonModule } from '@angular/common';
import { Component, ViewChildren, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  user_login: any;

  constructor() {
  }

  logout() {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userLogin');
    Swal.fire('logout successfully')
    this.user_login = false;
  }

  ngOnInit() {
    const userLogin = localStorage.getItem('userLogin');
    this.user_login = userLogin ? JSON.parse(userLogin) : false;
  }
}
