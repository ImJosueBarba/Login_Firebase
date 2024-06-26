import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private userService:UserService, private router:Router) { }


ngOnInit(): void {

}

onClick(){
  this.userService.logut().
  then(()=>{
    this.router.navigate(['/login']);
    console.log('Sesión cerrada');
  }).catch(error =>{
    console.log(error);
});
}
}
