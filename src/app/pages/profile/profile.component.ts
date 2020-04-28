import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userTest = {
    given_name: "Jonathan Ivan",
    family_name: "Aguero",
    nickname: "aguerojonathanivan",
    name: "Jonathan Ivan Aguero",
    picture: "https://lh4.googleusercontent.com/-bP4sXLhxYDI/AAAAAAAAAAI/AAAAAAAAAAA/AAKWJJN_MUqYCDFPbswc-oNJm_dh_makRQ/photo.jpg",
    locale: "es-419",
    updated_at: "2020-04-26T13:16:35.347Z",
    email: "aguerojonathanivan@gmail.com",
    email_verified: true,
    sub: "google-oauth2|104513613641722358545"
  }

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
