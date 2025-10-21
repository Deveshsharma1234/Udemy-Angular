import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./app-header/app-header";
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EasyTask');
}
