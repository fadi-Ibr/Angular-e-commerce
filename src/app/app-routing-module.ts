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

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'cart', component: Cart },
  { path: 'categories', component: Categories },
  { path: 'brands', component: Brands },
  { path: 'login', component: Login },
  { path: 'register', component: SignUp },
  { path: '**', component: NotFound },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
