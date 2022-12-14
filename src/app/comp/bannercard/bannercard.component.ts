import {Component, OnInit} from '@angular/core';
import {DataService} from 'src/app/serv/data.service';
import {AuthService} from 'src/app/serv/auth.service';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-bannercard',
  templateUrl: './bannercard.component.html',
  styleUrls: ['./bannercard.component.css']
})
export class BannercardComponent implements OnInit {

  isLogged = this.authService.loggedIn;
  myData: any;
  showEdit = false;

  constructor(
    private data:DataService,
    private authService:AuthService,
    private fb: FormBuilder
){}

  userFormEdit = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(45)]],
    currentPosition: ['', [Validators.required, Validators.maxLength(45)]],
    location: ['', [Validators.required, Validators.maxLength(45)]],
    profilePic: ['', [Validators.required, Validators.maxLength(255)]],
    profileBg: ['', [Validators.required, Validators.maxLength(255)]]
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
    this.data.putData('user/put/', id, this.userFormEdit.value)
      .subscribe(_ => this.onGet());
    this.toggleEdit();
  }

  toggleEdit(){
    this.showEdit = !this.showEdit;
  }
}
