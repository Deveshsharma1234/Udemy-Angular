import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Box } from "./box/box";
import { ResultBox } from "./shared/result-box/result-box";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Box, ResultBox],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
 data = signal<any[]>([]);

  // update when child emits
  onResult(result: any[]) {
    console.log("Received result:", result);
    this.data.set(result);
    console.log(this.data);
    
  }

  
  
}
