import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {

  user: User = {login: "", passwd: ""};
  recordar = false;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('login')){
      this.user.login = localStorage.getItem('login');
      this.recordar = true;
    }
  }

  login($event) : void{
    //$event.preventDefault();
  this.authService.authUser(this.user,this.recordar).subscribe(
    u => {
      console.log(u);
      this.user = u;
    },
    error => console.log(error),
    () => console.log('login')
  );
  }

}
