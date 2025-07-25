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
import { authGuard } from './guards/auth-guard';
import { nauthGuard } from './guards/nauth-guard';
import { confirmsaveGuard } from './guards/confirmsave-guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: Home },
  { path: 'products', canActivate: [authGuard], component: Products },
  { path: 'cart', canActivate: [authGuard], component: Cart },
  { path: 'categories', canActivate: [authGuard], component: Categories },
  { path: 'brands', canActivate: [authGuard], component: Brands },
  { path: 'login', canActivate: [nauthGuard], component: Login },
  {
    path: 'register',
    canActivate: [nauthGuard],
    canDeactivate: [confirmsaveGuard],
    component: SignUp,
  },
  {
    path: 'forget-password',
    canActivate: [nauthGuard],
    component: ForgetPassword,
  },
  { path: 'verify-code', canActivate: [nauthGuard], component: VerifyCode },
  {
    path: 'reset-password',
    canActivate: [nauthGuard],
    component: ResetPassword,
  },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
