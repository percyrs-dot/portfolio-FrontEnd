import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { AuthService } from 'src/app/serv/auth.service';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  isLogged = this.authService.loggedIn;
  myData: any;
  showEdit = false;

  constructor(
    private data:DataService,
    private authService:AuthService,
    private fb: FormBuilder
  ){}

  aboutFormEdit = this.fb.group({
    about: ['']
  })

  ngOnInit(): void {
    this.onGet()
  }

  onGet() {
    this.data.getData("user/get").subscribe(data => {
      this.myData = Object.assign({}, ...data);
    })
  }

  onUpdate(id: number) {
    this.data.putData('about/put/', id, this.aboutFormEdit.value)
      .subscribe(_ => this.onGet());
    this.toggleEdit();
  }

  toggleEdit(){
    this.showEdit = !this.showEdit;
  }
}
