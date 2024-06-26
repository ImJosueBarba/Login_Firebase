import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {environment} from '../environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"login-tradicional-3b3f8","appId":"1:104856885948:web:e7d7880cdb3b1086fdceb9","storageBucket":"login-tradicional-3b3f8.appspot.com","apiKey":"AIzaSyBxpLAWueQnR6cfSP82DlgDvNjNEp3mtjA","authDomain":"login-tradicional-3b3f8.firebaseapp.com","messagingSenderId":"104856885948","measurementId":"G-T15PBMM593"})),
    provideAuth(() => getAuth()),
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
