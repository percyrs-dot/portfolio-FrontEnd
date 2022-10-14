import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { LoginService } from 'src/app/serv/login.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  isLogged = this.loginService.loggedIn;
  myData: any;

  constructor(
    private dataProvider:DataService,
    private loginService:LoginService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData().subscribe(data => {
      this.myData = data.school;
    })
  }
}
