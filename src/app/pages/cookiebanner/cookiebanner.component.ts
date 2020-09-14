import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-cookiebanner',
  templateUrl: './cookiebanner.component.html',
  styleUrls: ['./cookiebanner.component.scss']
})
export class CookiebannerComponent implements OnInit {
  // private cookieValue: string;

  @ViewChild('html_banner') banner; //query selector, angular syntax

  isCookieSet = this.cookieService.get('accept_cookies'); //Metode der under init kontrollerer om denne ('x') string findes

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  setCookie() {
    this.cookieService.set('accept_cookies', '1', 7); //navn, værdi, antal dage cookie inden automatisk sletning
    this.banner.nativeElement.classList.add('hide_cookie_banner');
  }

}

