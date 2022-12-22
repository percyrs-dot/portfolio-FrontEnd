import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/serv/data.service';
import { AuthService } from 'src/app/serv/auth.service';
import {Skill} from "../../../assets/data/entity";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  showNew = false;
  isLogged = this.authService.loggedIn;
  myData: Skill[] | undefined;
  editable: any;

  constructor(
    private data:DataService,
    private authService:AuthService,
    private fb: FormBuilder
    ) { }

  skillForm = this.fb.group({
    name: ['',[Validators.required, Validators.maxLength(45)]],
    level: ['']
  })

  skillFormEdit = this.fb.group({
    name: ['',[Validators.required, Validators.maxLength(45)]],
    level: ['']
  })

  ngOnInit(): void {
    this.onGet();
  }

  onGet() {
    this.data.getData("skill/get").subscribe(data => {
      this.myData = data;
      let editable = new Array<boolean>(data.length);
      editable.fill(false);
      this.editable = editable;
    })
  }


  onSubmit() {
    this.data.postData('skill/post', this.skillForm.value)
      .subscribe(_ => this.onGet());
  }

  onUpdate(id: number) {
    this.data.putData('skill/put/', id, this.skillFormEdit.value)
      .subscribe(_ => this.onGet());

  }

  onDelete(id: number) {
    this.data.deleteData('skill/delete/', id)
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
