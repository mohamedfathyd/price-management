import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { GlobalState } from 'src/app/core/global/global-state';
import regex from 'src/app/shared/validators/regex';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'notif-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends GlobalState implements OnInit {
  loginForm: FormGroup;
  loading = false;
  lang = localStorage.getItem('language');
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private aRoute: ActivatedRoute,
   ) {
    super();
    localStorage.removeItem("chat");
    this.setLoginForm();
  }
  ngOnInit(): void {}
  setLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(regex.user)]],
      password: ['', [Validators.required, Validators.pattern(regex.password)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  validateForm() {
    this.login();
  }
  login() {
    this.loading = true;
    this.userService.login(this.loginForm.value).subscribe(
      (res) => {
        if (res.success) {
          localStorage.setItem('userToken', res.data.token);
          localStorage.setItem('firstName', res.data.firstName);
          localStorage.setItem('lastName', res.data.lastName);
          localStorage.setItem('userName', res.data.username);
          localStorage.setItem("refresh_token",res.data.refreshToken)
          this.loginForm.reset();
        } else
          this.notifier = {
            shown: true,
            msg: res.description,
            subMsg: '',
            type: 'error',
          };
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }
}
