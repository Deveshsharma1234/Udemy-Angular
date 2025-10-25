import { Component, Input, signal } from '@angular/core';
import { InputBox } from "../shared/input-box/input-box";
import { Button } from "../shared/button/button";

@Component({
  selector: 'app-box',
  imports: [InputBox, Button],
  templateUrl: './box.html',
  styleUrl: './box.scss',
})
export class Box {

}
