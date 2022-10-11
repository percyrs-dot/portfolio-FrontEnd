import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  myData: any;

  constructor(
    private dataProvider:DataService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData().subscribe(data => {
      this.myData = data.experience;
    })
  }
}
