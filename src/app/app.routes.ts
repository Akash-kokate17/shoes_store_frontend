import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NikeComponent } from './component/nike/nike.component';
import { PumaComponent } from './component/puma/puma.component';
import { AdidasComponent } from './component/adidas/adidas.component';
import { ShoeDetailsComponent } from './component/shoe-details/shoe-details.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { OtpComponent } from './component/otp/otp.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'nike', component:NikeComponent},
    {path:'adidas', component:AdidasComponent},
    {path:'puma', component:PumaComponent},
    {path:'cart',component:CartComponent},
    {path:'shoe-details-page', component:ShoeDetailsComponent},
    {path:'signUp',component:SignUpComponent,
        canActivate:[authGuard]
    },
    {path:'login',component:LoginComponent,
        canActivate:[authGuard]
    },
    {path:'otpComponent', component:OtpComponent,
        canActivate:[authGuard]
    }
];
