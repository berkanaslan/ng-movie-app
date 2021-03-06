import {Component, OnInit} from '@angular/core';

import {AuthService} from "../../_service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => this.isLogged = !!user);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/auth"]);
  }
}
