import { Injectable } from "@angular/core";
import { Auth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@angular/fire/auth";
import { signOut } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private auth:Auth) { }

    register (email:string, password:string){
      return createUserWithEmailAndPassword(this.auth, email, password);
    }
  
    login (email:string, password:string){
      return signInWithEmailAndPassword(this.auth, email, password);
    }
  
    logut(){
      return signOut(this.auth);
    }
    
}