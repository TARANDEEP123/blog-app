import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

 loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),
  });


  login_form() {
    return this.loginForm.value;
  }
  login() : void {

    if(this.login_form().username === 'admin@gmail.com' && this.login_form().pwd === 'admin'){
     this.router.navigate([""]);
    }else {
      alert("Invalid credentials");
    }
  }



}
