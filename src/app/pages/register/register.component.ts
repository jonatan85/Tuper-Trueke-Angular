import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { Register } from 'src/app/core/services/auth/models/register.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm?: FormGroup;
  public formError?: string;
  public isRegister: boolean = false;
  public isLogged: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', ),
      username: new FormControl('', ),
      lastname: new FormControl('',),
      year: new FormControl('', [Validators.required, Validators.maxLength(3)] ),
      country: new FormControl('', ),
    });
  }

  public ngOnInit(): void {
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }

  public registerUser() {
    if (!this.registerForm?.valid) { return; }
    const user: Register = this.registerForm.value;
    this.auth.register(user).subscribe({
      next: (res) => {
        this.registerForm?.reset();
      },
      error: (err) => {
        this.formError = err.error;
        this.registerForm?.reset();
      },
    });
    this.isRegister = true;
    this.router.navigate(['login']);
  }

  public navigateToLogout() {
    this.router.navigate(['account']);
  }
}
