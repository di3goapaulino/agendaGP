  
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import {LoginService} from './login.service'
import {User} from './user.model'
//import {NotificationService} from '../../shared/messages/notification.service'

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required]),
    })
  }

}
