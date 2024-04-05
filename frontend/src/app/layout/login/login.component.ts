import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthResponse } from '../../models/login/login';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { AuthHelper } from '../../interceptors/auth-helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private authHelper: AuthHelper
  ) {}

  isAuthenticated: boolean = false;

  ngOnInit(): void {
    this.isAuthenticated = this.authHelper.isAuthenticated();
  }

  userForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  login() {
    if (this.userForm.valid) {
      this.apiService
        .post<AuthResponse>('/auth/authenticate', {
          ...this.userForm.value,
        })
        .subscribe({
          next: (response) => {
            localStorage.setItem('access_token', response.token);
            this.router.navigate(['/pedidos']);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }

  logout(): void {
    if (window.confirm('Deseja realmente sair do sistema?')) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('auth');
        window.location.href = '/login';
      }
    }
  }
}
