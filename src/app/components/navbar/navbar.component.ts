import {Component, OnInit} from '@angular/core';

import {AuthService} from "../../_service/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      console.log("Berkan");
      console.log(user);
      this.isLogged = !!user;
    });
  }

}
