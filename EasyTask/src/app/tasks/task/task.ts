import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
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
