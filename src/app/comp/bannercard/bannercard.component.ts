import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { LoginService } from 'src/app/serv/login.service';

@Component({
  selector: 'app-bannercard',
  templateUrl: './bannercard.component.html',
  styleUrls: ['./bannercard.component.css']
})
export class BannercardComponent implements OnInit {

  isLogged = this.loginService.loggedIn;
  myData: any;

  constructor(
    private dataProvider:DataService,
    private loginService:LoginService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData('user/get').subscribe(data => {
      this.myData = Object.assign({}, ...data);
    })
  }

}
