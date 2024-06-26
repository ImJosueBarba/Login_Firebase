import { Injectable } from "@angular/core";
import { Auth } from '@angular/fire/auth';

@Injectable({
    providedIn: 'root'
    })
export class AuthService {
    token = '';
    constructor(private auth:Auth) {}
    isAuth() {
        return this.auth.currentUser !== null;
      }
}