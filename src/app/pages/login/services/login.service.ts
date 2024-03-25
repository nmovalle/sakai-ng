import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient
  ) { }

  signInGoogle() {
    debugger;

    return this.http.get(`${environment.apiUrl}/api/auth/google`);
  }
}
