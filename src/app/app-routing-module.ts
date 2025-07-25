import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Cart } from './components/cart/cart';
import { Categories } from './components/categories/categories';
import { Brands } from './components/brands/brands';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { NotFound } from './components/not-found/not-found';
import { ForgetPassword } from './components/forget-password/forget-password';
import { VerifyCode } from './components/verify-code/verify-code';
import { ResetPassword } from './components/reset-password/reset-password';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'cart', component: Cart },
  { path: 'categories', component: Categories },
  { path: 'brands', component: Brands },
  { path: 'login', component: Login },
  { path: 'register', component: SignUp },
  { path: 'forget-password', component: ForgetPassword },
  { path: 'verify-code', component: VerifyCode },
  { path: 'reset-password', component: ResetPassword },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
