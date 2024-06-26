import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  constructor(private userService:UserService) { }
  

ngOnInit(): void {}

onSubmit(form: any): void {
  const { email, pass } = form.value;
  this.userService.register(email, pass)
    .then((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Account Created',
        text: 'Your account has been created successfully!',
      });
      console.log(res);
    })
    .catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'There was a problem creating your account.',
      });
      console.log(err);
    });
}

}
