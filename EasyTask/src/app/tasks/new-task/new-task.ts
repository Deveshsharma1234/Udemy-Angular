import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input() isAddingTask ?:boolean

  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<any>();
  title = '';
  summary = '';
  dueDate = '';

  onCancel() {
    this.cancel.emit();
  }
  onCreate(){
    // simple validation
    if (!this.title.trim() || !this.summary.trim() || !this.dueDate) return;

    const newTask = {
      id: "t"+Math.random().toString(36).substring(2, 9),
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
      userId: null // will be set by parent (Tasks)
    };
    this.create.emit(newTask)
  }
}
