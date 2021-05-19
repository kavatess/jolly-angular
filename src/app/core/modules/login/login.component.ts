import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/blocks/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup = new FormGroup({
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(11)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(256)])
  });
  subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  login(): void {
    if (this.loginForm.valid) {
      this.subscription = this.authService.login(this.loginForm.value).subscribe(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['']);
        } else {
          alert('Đăng nhập thất bại. Xin vui lòng thử lại.')
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
