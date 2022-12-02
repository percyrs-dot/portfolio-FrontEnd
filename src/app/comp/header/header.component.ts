import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/serv/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isLogged = this.loginService.loggedIn;
  show = false;

  constructor(private loginService:LoginService) { } 

  ngOnInit(): void {
  }

  toggleLogin(){
    this.show = !this.show;
 }
}
