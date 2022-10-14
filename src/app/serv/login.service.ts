import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:4200/api';
  token: any;

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    this.http.post(this.uri + '/authenticate', {username:username, password:password})
      .subscribe((resp: any) => {localStorage.setItem('auth_token', resp.token);
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
}
