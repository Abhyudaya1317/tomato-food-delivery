import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  loginObj :any = {
    email: '',
    password: ''
  }

  route=inject(Router);

  onLogin(){
    if (this.loginObj.email=="a" && this.loginObj.password=="1") {
      localStorage.setItem("userEmail", this.loginObj.email);
      this.route.navigateByUrl("/home");
    }
    else{
      alert("Invalid Credentials");
    }
  }
}
