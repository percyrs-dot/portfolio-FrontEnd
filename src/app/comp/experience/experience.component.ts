import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { LoginService } from 'src/app/serv/login.service';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  isLogged = this.loginService.loggedIn;
  myData: any;

  constructor(
    private dataProvider:DataService,
    private loginService:LoginService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData().subscribe(data => {
      this.myData = data.experience;
    })
  }
}
