import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { AuthService } from 'src/app/serv/auth.service';
import { Education } from "../../../assets/data/entity";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {

  showNew = false;
  isLogged = this.authService.loggedIn;
  myData: Education[] | undefined;
  editable: any;

  constructor(
    private data:DataService,
    private authService:AuthService,
    private fb: FormBuilder
    ) {
  }

  eduForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(45)]],
    title: ['', [Validators.required], Validators.maxLength(45)],
    timeStart: ['', [Validators.required]],
    timeEnd: ['', [Validators.required]],
    location: ['', [Validators.required], Validators.maxLength(45)],
    img: ['', [Validators.required], Validators.maxLength(255)],
    url: ['', [Validators.required], Validators.maxLength(255)]
  })

  eduFormEdit = this.fb.group({
    name: ['', [Validators.required], Validators.maxLength(45)],
    title: ['', [Validators.required], Validators.maxLength(45)],
    timeStart: ['', [Validators.required]],
    timeEnd: ['', [Validators.required]],
    location: ['', [Validators.required], Validators.maxLength(45)],
    img: ['', [Validators.required], Validators.maxLength(255)],
    url: ['', [Validators.required], Validators.maxLength(255)]
  })

  ngOnInit(): void {
    this.onGet();
  }

  onGet() {
    this.data.getData("edu/get").subscribe(data => {
      this.myData = data;
      let editable = new Array<boolean>(data.length);
      editable.fill(false);
      this.editable = editable;
    })
  }

  onSubmit() {
    this.data.postData('edu/post', this.eduForm.value)
      .subscribe(_ => this.onGet());
  }

  onUpdate(id: number) {
      this.data.putData('edu/put/', id, this.eduFormEdit.value)
        .subscribe(_ => this.onGet());

  }

  onDelete(id: number) {
    this.data.deleteData('edu/delete/', id)
      .subscribe(_ => this.onGet());
  }

  toggleNew(){
    this.showNew = !this.showNew;
  }

  toggleEdit(i: number){
    if (this.editable[i]) {
      this.editable[i] = false
    } else {
      this.editable.fill(false);
      this.editable[i] = true
    }
  }
}
