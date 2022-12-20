import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from 'src/app/serv/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
              private authService:AuthService
              ) {
  }

  loginForm=this.formBuilder.group(
    {
      username: ['',[Validators.required]],
      password: ['',[Validators.required]]
    }
  )

  ngOnInit(): void {
  }

  onSend() {
     this.authService.LogIn(this.loginForm.get('username')?.value,
                            this.loginForm.get('password')?.value)

  }
}
