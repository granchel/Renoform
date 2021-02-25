import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  logued: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.logued = this.authService.isAuth();
    this.authService.isLogued().subscribe(
      l => this.logued = l
    )
  }

  logout(){
  this.authService.logOut();
  }

}
