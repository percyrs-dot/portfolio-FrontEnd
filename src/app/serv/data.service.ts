import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoint } from "../../assets/data/config";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = endpoint;

  constructor(private http: HttpClient) {
  }

  getData(path: string): Observable<any> {
    return this.http.get(this.url + path);
  }

  postData(path: string, value: object) {
    return this.http.post(this.url + path, value, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}});
  }

  putData(path: string, id: number, value: object){
    return this.http.put(this.url + path + id, value, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}})
  }

  deleteData(path: string, id: number) {
    return this.http.delete(this.url + path + id, {headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}});
  }
}
