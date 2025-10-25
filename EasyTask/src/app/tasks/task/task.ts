import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task: any;
  @Input() user: any;
  @Output() compleate = new EventEmitter()

  // onComplete(){
  //   this.compleate.emit(this.task.id)
  // }
  onComplete = () => this.compleate.emit(this.task.id)

}
