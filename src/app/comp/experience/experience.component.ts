import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { AuthService } from 'src/app/serv/auth.service';
import { Experience } from "../../../assets/data/entity";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  showNew = false;
  isLogged = this.authService.loggedIn;
  myData: Experience[] | undefined;
  editable: any;

  constructor(
    private data:DataService,
    private authService:AuthService,
    private fb: FormBuilder
    ) {

  }

  expForm = this.fb.group({
    name: ['', [Validators.required]],
    position: ['', [Validators.required]],
    timeStart: ['', [Validators.required]],
    timeEnd: ['', [Validators.required]],
    location: ['', [Validators.required]],
    img: ['', [Validators.required]],
    url: ['', [Validators.required]]
  })

  expFormEdit = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(45)]],
    position: ['', [Validators.required, Validators.maxLength(45)]],
    timeStart: ['', [Validators.required]],
    timeEnd: ['', [Validators.required]],
    location: ['', [Validators.required, Validators.maxLength(45)]],
    img: ['', [Validators.required, Validators.maxLength(255)]],
    url: ['', [Validators.required, Validators.maxLength(255)]]
  })

  ngOnInit(): void {
    this.onGet();
  }

  onGet() {
    this.data.getData("exp/get").subscribe(data => {
      this.myData = data;
      let editable = new Array<boolean>(data.length);
      editable.fill(false);
      this.editable = editable;
    })
  }

  onSubmit() {
    this.data.postData('exp/post', this.expForm.value)
      .subscribe(_ => this.onGet());
  }

  onUpdate(id: number) {
    this.data.putData('exp/put/', id, this.expFormEdit.value)
      .subscribe(_ => this.onGet());

  }

  onDelete(id: number) {
    this.data.deleteData('exp/delete/', id)
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
