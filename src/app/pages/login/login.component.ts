import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'

import { CookieService } from 'ngx-cookie-service';
import { HttpService } from 'src/app/services/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private cookie: CookieService,
    private formBuilder: FormBuilder,
    private http: HttpService
  ) { }

  login = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  submit() {
    console.log(this.login.get('username').value);
    console.log(this.login.get('password').value);

    const formData = new FormData();

    formData.append('username', this.login.get('username').value);
    formData.append('password', this.login.get('password').value);

    this.http.getLogin(formData).subscribe((res: any) => {
      console.log(res.access_token);
      if (res.access_token) {
        this.cookie.set('token', res.access_token);
        this.cookie.set('userid', res.user_id);
        location.reload();
      }

    })

  }


}
