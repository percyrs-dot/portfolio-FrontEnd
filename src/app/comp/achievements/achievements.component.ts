import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { LoginService } from 'src/app/serv/login.service';


@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  isLogged = this.loginService.loggedIn;
  myData: any;

  constructor(
    private dataProvider:DataService,
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
  }

}
