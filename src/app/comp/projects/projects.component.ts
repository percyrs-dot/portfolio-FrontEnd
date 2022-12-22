import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { AuthService } from 'src/app/serv/auth.service';
import { Project } from "../../../assets/data/entity";
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  showNew = false;
  isLogged = this.authService.loggedIn;
  myData: Project[] | undefined;
  editable: any;

  constructor(
    private data:DataService,
    private authService:AuthService,
    private fb: FormBuilder
  ) { }

  projForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(45)]],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    year: ['', [Validators.required]],
    img: ['', [Validators.required, Validators.maxLength(255)]],
    url: ['', [Validators.required, Validators.maxLength(255)]]
  })

  projFormEdit = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(45)]],
    description: ['', [Validators.required, Validators.maxLength(255)]],
    year: ['', [Validators.required]],
    img: ['', [Validators.required, Validators.maxLength(255)]],
    url: ['', [Validators.required, Validators.maxLength(255)]]
  })

  ngOnInit(): void {
    this.onGet();
  }

  onGet() {
    this.data.getData("proj/get").subscribe(data => {
      this.myData = data;
      let editable = new Array<boolean>(data.length);
      editable.fill(false);
      this.editable = editable;
    })
  }

  onSubmit() {
    this.data.postData('proj/post', this.projForm.value)
      .subscribe(_ => this.onGet());
  }

  onUpdate(id: number) {
    this.data.putData('proj/put/', id, this.projFormEdit.value)
      .subscribe(_ => this.onGet());

  }

  onDelete(id: number) {
    this.data.deleteData('proj/delete/', id)
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
