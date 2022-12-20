import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serv/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {


  isLogged = this.authService.loggedIn;
  show = false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  toggleLogin(){
    this.show = !this.show;
 }

 logOut(){
    this.authService.logOut()
    window.location.reload()
 }
}
