import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./app-header/app-header";
import { User } from "./user/user";
import { DUMMY_USERS } from '../app/dummy_users';
import { Tasks } from "./tasks/tasks";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EasyTask');
  users = signal(DUMMY_USERS)
  selectedUser = signal(null);

  onSelect(u:any){
    console.log("Select User with id : " ,u.id);
    this.selectedUser.set(u);
  }
}
