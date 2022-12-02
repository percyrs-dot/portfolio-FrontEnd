import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/serv/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder,
              private authService:AuthService
              ) { 
    this.form=this.formBuilder.group(
      {
        username:['',[Validators.required]],
        password:['',[Validators.required]]
        //rest of id'ers, whenever I have API ready.
      }
    )
  }

  ngOnInit(): void {
  }

  get Username() {
    return this.form.get('username');
  }

  get Password() {
    return this.form.get('password');
  }

  onSend(event:Event)
  {
    event.preventDefault;
    this.authService.LogIn(this.form.value).subscribe(data=>{
      
    })
  }
}
