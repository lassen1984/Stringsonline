import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BasketService } from './basket.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  tokenKey: string = 'token';
  userIdKey: string = 'userid';

  constructor(private router: Router, private cookieService: CookieService, private http: HttpService, private basketService: BasketService) { }

  login(username: string, password: string) {
    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);

    this.http.post('https://api.mediehuset.net/token', formData)
      .subscribe((res: any) => { //.getLogin(formData)
        console.log(res.access_token);
        if (res.access_token) {
          this.cookieService.set(this.tokenKey, res.access_token);
          this.cookieService.set(this.userIdKey, res.user_id);

          this.basketService.updateBasketFromLogin();
          this.router.navigateByUrl('/');
        }
      })
  }

  logout() {
    this.cookieService.delete(this.tokenKey);
    this.cookieService.delete(this.userIdKey);
  }

  isLoggedIn(): boolean {
    if (this.cookieService.get(this.tokenKey)) {
      return true;
    } else {
      return false;
    }
  }

  getUserId(): number {
    return parseInt(this.cookieService.get(this.userIdKey));
  }

  getToken(): string {
    return this.cookieService.get(this.tokenKey);
  }
}
