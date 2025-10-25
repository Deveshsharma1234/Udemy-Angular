import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text = 'Calculate';

}
