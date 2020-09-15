import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private getHeaders(): HttpHeaders {
    let token = this.cookieService.get('token');

    if (token) {
      let headers = new HttpHeaders({
        'Authorization': 'Bearer ' + token
      })
      return headers;
    }

    return null;
  }

  get(url: string) {
    let ourHeaders = this.getHeaders();
    return this.http.get(url, { headers: ourHeaders });
  }

  post(url: string, data: any) {
    let ourHeaders = this.getHeaders();
    return this.http.post(url, data, { headers: ourHeaders });
  }

  patch(url: string, data: any) {
    let ourHeaders = this.getHeaders();
    return this.http.patch(url, data, { headers: ourHeaders });
  }

  delete(url: string) {
    let ourHeaders = this.getHeaders();
    return this.http.delete(url, { headers: ourHeaders });
  }

  // getLogin(header) {
  //   return this.http.post('https://api.mediehuset.net/token', header);
  // }

  getProduct(id) {
    return this.http.get(`https://api.mediehuset.net/stringsonline/productgroups/${id}`);
  }


  getProducts() {
    return this.http.get('https://api.mediehuset.net/stringsonline/');
  }



}
