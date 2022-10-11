import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  myData: any;

  constructor(
    private dataProvider:DataService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData().subscribe(data => {
      this.myData = data.school;
    })
  }
}
