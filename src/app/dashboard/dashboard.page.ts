import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  barStatus = false;
  imageUploads = [];

  constructor(public authService : AuthenticationService, private firebaseUpload : UploadService) { }

  ngOnInit() {
  }

  uploadPhoto(event){

    const file = event.target.files[0];
    console.log(event)
    if (file.type.split('/')[0] !== 'image') { 
     console.error('unsupported file type :( '+ file.type)
     return;
    }

    this.barStatus = true;
    this.firebaseUpload.guardarImg(file).then(
      (res : any) => {
        if (res) {
          console.log(res);
          this.imageUploads.unshift(res);
          this.barStatus = false;
        }
      }, (error : any) => {
        this.barStatus = false;
      }
    )

  }


}
