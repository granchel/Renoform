import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {this.loguedInfo = new BehaviorSubject<boolean>(false); }
  url = "assets/users.json"

  authUser(user: User, recordar): Observable<User>{
    /*   ///////////// Mètode si fora un servidor real
    const authData = { ...usuario};
    return this.http.post(this.url,authData);
    */
   return this.http.get<User>(this.url)
   .pipe(map(u => {
     u["passwd"]= user.passwd;
     localStorage.setItem('token', u.token);
     if(recordar) localStorage.setItem('login',u.login);
     if (u.token) {
      localStorage.setItem('token',u.token);
      this.loguedInfo.next(true)
    }
     return u; }));
  }
  
  isAuth(): boolean{
    if (localStorage.getItem('token')){
      this.loguedInfo.next(true);
      return true;
      
    } else{
      this.loguedInfo.next(false);
       return false;
    }
  }
 
  private loguedInfo: BehaviorSubject<boolean>;
  isLogued(): Observable<boolean>{
    return this.loguedInfo.asObservable()
  }

  
  logOut(): void{
    localStorage.removeItem('token');
    this.loguedInfo.next(false);
  }

}
