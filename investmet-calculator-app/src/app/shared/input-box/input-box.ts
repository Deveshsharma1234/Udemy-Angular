import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './input-box.html',
  styleUrl: './input-box.scss',
})
export class InputBox {
@Input({ required: true }) text: string = 'Amount';
  @Input({ required: true }) placeholder: string = 'Enter value';
   @Input() value: number | null = null;
  @Output() valueChange = new EventEmitter<number>();

}
