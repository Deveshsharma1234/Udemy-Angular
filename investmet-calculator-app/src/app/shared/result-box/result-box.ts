import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-box',
  imports: [CommonModule],
  templateUrl: './result-box.html',
  styleUrl: './result-box.scss',
})
export class ResultBox {
  @Input() data : any;
}
