import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { SaveService } from '../services/save.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:SaveService) {}
  loginForm = new FormGroup({
    'username':new FormControl('example@mail.com'),
    'password' : new FormControl(null , [Validators.required, Validators.minLength(8)])
  })



  loginUser() {
    // console.warn(this.loginForm.value);
    this.service.loginData(this.loginForm.value).subscribe((res) => {
      console.log(res);
     });
  }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password')
  }
}
