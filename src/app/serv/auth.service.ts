import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { endpoint } from "../../assets/data/config";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = endpoint + "auth";

  constructor(private http: HttpClient) {
  }

  public get loggedIn(): boolean{
    let token = sessionStorage.getItem('token')
    return !(token === null)
  }

  logOut() {
    sessionStorage.removeItem('token');
  }

  LogIn(username: string | any, password: string | any){
    this.http.post(this.uri, JSON.stringify({username, password}), {headers: {
        'Authorization': `Basic ${window.btoa(username + ':' + password)}`,

      }, responseType: 'text'}).subscribe((resp: any)=>{
        sessionStorage.setItem('token', resp);
        window.location.reload()
    });
  }
}


