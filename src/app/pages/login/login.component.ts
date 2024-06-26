import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  onSubmit(form: any): void {
    const { username, pass } = form.value;
    this.userService.login(username, pass)
      .then((res) => {
        this.router.navigate(['/home']);
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'You have successfully logged in!',
        });
        console.log(res);
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid username or password!',
        });
        this.router.navigate(['/login']);
        console.log(err);
      });
  }

}
