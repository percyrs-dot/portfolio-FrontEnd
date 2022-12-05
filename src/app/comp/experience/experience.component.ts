import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { LoginService } from 'src/app/serv/login.service';
import { Experience } from "../../../assets/data/entity";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  isLogged = this.loginService.loggedIn;
  myData: Experience[] | undefined;

  constructor(
    private dataProvider:DataService,
    private loginService:LoginService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData("exp/get").subscribe(data => {
      this.myData = data;
    })
  }
}
