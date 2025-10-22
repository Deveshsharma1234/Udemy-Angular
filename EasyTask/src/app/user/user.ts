import { Component ,EventEmitter,Input,Output,signal} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input() users: any;
  @Output() select = new EventEmitter();
  onSelectUser (u:any)
  {
   this.select.emit(u);
  }
}
