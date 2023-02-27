import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IUser } from 'src/app/core/services/auth/models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm?: FormGroup;
  public formError?: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)])
    });
  }

  public loginUser() {
    if (!this.loginForm?.valid) { return; }
    const user: IUser = this.loginForm.value;
    this.auth.loginJWT(user).subscribe({
      next: (res) => {
        this.loginForm?.reset();
      },
      error: (err) => {
        this.formError = err.error;
        this.loginForm?.reset();
      },
    });
    this.router.navigate(['home']);
  }
}

