import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  login = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  submit() {
    let username = this.login.get('username').value;
    let password = this.login.get('password').value;
    this.userService.login(username, password);

    // const formData = new FormData();

    // formData.append('username', this.login.get('username').value);
    // formData.append('password', this.login.get('password').value);

    // this.http.post('https://api.mediehuset.net/token', formData)
    //   .subscribe((res: any) => { //.getLogin(formData)
    //     console.log(res.access_token);
    //     if (res.access_token) {
    //       this.cookie.set('token', res.access_token);
    //       this.cookie.set('userid', res.user_id);
    //       location.reload();
    //     }

    //   })

  }


}
