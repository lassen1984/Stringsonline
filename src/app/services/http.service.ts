import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  //Login, token etc.

  getLogin(header) {
    return this.http.post('https://api.mediehuset.net/token', header);
  }


}
