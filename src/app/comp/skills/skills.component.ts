import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  myData: any;

  constructor(
    private dataProvider:DataService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData().subscribe(data => {
      this.myData = data.skills;
    })
  }
}
