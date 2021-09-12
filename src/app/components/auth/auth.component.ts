import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthRequest} from "../../_model/user";
import {AuthService} from "../../_service/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  actionText: string = "";

  formGroup: FormGroup = new FormGroup({
    emailController: new FormControl("", [Validators.required]),
    passwordController: new FormControl("", [Validators.required])
  });

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.actionText = this.isLoginMode ? "Sign in" : "Sign up";
  }

  onAuthModeChanged(isLoginMode: boolean) {
    this.isLoginMode = isLoginMode;
    this.actionText = this.isLoginMode ? "Sign in" : "Sign up"
  }

  onSubmitButtonPressed() {
    if (!this.formGroup.valid) {
      return;
    }

    const authRequest: AuthRequest = ({
      email: this.formGroup.value.emailController,
      password: this.formGroup.value.emailController,
      returnSecureToken: true,
    });

    this.authService.tryAuth(authRequest, this.isLoginMode).subscribe(
      response => {
        console.log(response);
      });
  }
}
