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
  }


}
