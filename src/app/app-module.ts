import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './components/login/login';
import { SignUp } from './components/sign-up/sign-up';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { Cart } from './components/cart/cart';
import { Categories } from './components/categories/categories';
import { Brands } from './components/brands/brands';
import { NotFound } from './components/not-found/not-found';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ForgetPassword } from './components/forget-password/forget-password';
import { VerifyCode } from './components/verify-code/verify-code';
import { ResetPassword } from './components/reset-password/reset-password';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Login,
    SignUp,
    Home,
    Products,
    Cart,
    Categories,
    Brands,
    NotFound,
    Navbar,
    Footer,
    ForgetPassword,
    VerifyCode,
    ResetPassword,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
