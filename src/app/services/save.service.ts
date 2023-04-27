import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  url='https://doctordiaryapi.arkinfosoft.in/api/v1/Authentication/AccountSignupSignin';
  url1 = 'https://doctordiaryapi.arkinfosoft.in/api/v1/Authentication/Login'

  constructor(private http: HttpClient) { }
  getAllUser() {
    return this.http.get(this.url);
    
  }
  getAll(){
   return this.http.get(this.url1)
  }
  loginData(data1 : any) {
    console.log(data1);
    
    return this.http.post(this.url1, data1)
  }

  saveData(data : any ){
// console.log(data);  
return this.http.post(this.url, data)
  }
}
