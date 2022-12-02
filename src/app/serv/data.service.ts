import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoint } from "../../assets/data/config";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = endpoint;
  constructor(private http:HttpClient) { }

  provideData(path: string | undefined):Observable<any>{
    return this.http.get(this.url + path);
  }
}
