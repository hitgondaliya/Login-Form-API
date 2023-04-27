import { Component } from '@angular/core';
import {FormGroup , FormControl , FormBuilder, Validators} from '@angular/forms'
import {SaveService} from '../services/save.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    constructor(private service :SaveService){}
  loginUsers = [];
  users = {
    email : '',
    Password : '',
    ContactNo : ''
  }
  loginForm = FormGroup;

  loginForm1 = new FormGroup({
    Email:new FormControl('example@mail.com', [Validators.required, Validators.email]),
    Firstname:new FormControl('' ),
    Lastname:new FormControl(''),
    ContactNo:new FormControl(''),
    Password: new FormControl(null , [Validators.required, Validators.minLength(8)]),
  })
  



  loginUser1() {
  //  console.warn(this.loginForm1.value);
   this.service.saveData(this.loginForm1.value).subscribe((result) => {
    console.log(result);
   });
      
  
  }
  get email() {
    return this.loginForm1.get('email');
  }
  get Password() {
    return this.loginForm1.get('Password')
  }
}
