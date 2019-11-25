import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
/*
  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
*/
  constructor() { }

  ngOnInit() {}

  onLoginClick() {
    console.log('login');
  }

}
