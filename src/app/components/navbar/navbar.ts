import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  userLoggedIn = false;
  constructor(private authService: Auth) {}
  ngOnInit(): void {
    this.authService.isloggedIn.subscribe({
      next: (value) => {
        this.userLoggedIn = value;
      },
    });
  }
  logout() {
    this.authService.logOut();
  }
}
