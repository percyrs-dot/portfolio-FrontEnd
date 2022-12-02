import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import {endpoint} from "../../assets/data/config";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = endpoint + "auth";
  currentUserObject:BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    this.currentUserObject = new BehaviorSubject<any>
      (
        JSON.parse(sessionStorage.getItem('currentUser') || '{}')
      )
  }

  LogIn(credentials:any):Observable<any>
  {
    return this.http.post(this.url, credentials).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }
}
