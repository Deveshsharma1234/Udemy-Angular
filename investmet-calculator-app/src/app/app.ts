import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Box } from "./box/box";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Box],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
