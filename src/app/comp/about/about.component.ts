import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myData: any;

  constructor(
    private dataProvider:DataService
    ) { }

  ngOnInit(): void {
    this.dataProvider.provideData().subscribe(data => {
      this.myData = data;
    })
  }

}
