import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  user: IUser = {};

  ngOnInit(): void {
    this.buildHeader();
  }

  buildHeader() {
    if (this.checkIfUserIsLogged()) {
      this.user.name = localStorage.getItem('userName') || '';
      this.user.role = localStorage.getItem('role') || '';
    }
  }

  checkIfUserIsLogged(): boolean {
    return localStorage.getItem('userName') !== null &&
      localStorage.getItem('role') !== null;
  }
}
