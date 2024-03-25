import { Component } from '@angular/core';
import { MessageService } from 'primeng/api'
import { LoginService } from './services/login.service';
import { GoogleApiService, UserInfo } from './services/google-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  valCheck: string[] = ['remember'];
  password!: string;
  userInfo?: UserInfo;


  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private readonly googleApi: GoogleApiService
  ) {
    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info;
    })
  }

  signInGoogle() {
    if (!this.isLoggedIn()) {
      this.googleApi.signIn();
    }
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn();
  }

  logout() {
    this.googleApi.signOut();
  }
}
