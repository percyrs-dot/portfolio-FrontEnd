import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';

@Component({
  selector: 'app-bannercard',
  templateUrl: './bannercard.component.html',
  styleUrls: ['./bannercard.component.css']
})
export class BannercardComponent implements OnInit {

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
