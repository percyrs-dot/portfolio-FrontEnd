import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { LoginService } from 'src/app/serv/login.service';
import {Skill} from "../../../assets/data/entity";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  isLogged = this.loginService.loggedIn;
  myData: Skill[] | undefined;

  constructor(
    private dataProvider:DataService,
    private loginService:LoginService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData("skill/get").subscribe(data => {
      this.myData = data;
    })
  }
}
