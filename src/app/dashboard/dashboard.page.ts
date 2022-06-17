import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public authService : AuthenticationService, private firebaseUpload : UploadService) { }

  ngOnInit() {
  }

  grupos = [
    {
      "rutaGrupo" : "../../assets/img/bse.jpg",
      "nombre": "Black Sun Empire",
      "desc": "Black Sun Empire are a Dutch drum and bass group that formed in Utrecht, Netherlands in 1997 by producers Rene Verdult and brothers Micha and Milan Heyboer."
    },
    {
      "rutaGrupo" : "../../assets/img/cultureshock.jpg",
      "nombre": "Culture Shock",
      "desc": "James Pountney, better known by his stage name Culture Shock, is a British drum and bass DJ and record producer. He is currently signed to RAM Records."
    },
    {
      "rutaGrupo" : "../../assets/img/deltaheavy.jpg",
      "nombre": "DELTΔ HEΔVY",
      "desc": "Delta Heavy (often stylised as DELTΔ HEΔVY) are an English drum and bass production duo consisting of Ben Hall and Simon James. They found fame with their 2012 single 'Get By'."
    },
    {
      "rutaGrupo" : "../../assets/img/prototypes.jpg",
      "nombre": "The Prototypes",
      "desc": "The Prototypes is a British drum and bass duo consisting of Chris Garvey and Nick White.[1] Founded in Brighton, England, in the late 2000s, by 2010 they had released their first singles."
    }
  ]


}
