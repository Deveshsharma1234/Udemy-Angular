import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Task } from "./task/task";
import {dummyTasks} from "../../app/dummy_tasks";
import { NewTask } from "./new-task/new-task";


@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() user :any
  tasks = signal(dummyTasks)
 isAddingTask = false

  onCompleate(id:string){
    this.tasks.update(tasks => tasks.filter(t => t.id !== id)); 
  }
  onStartAddTask(){
    this.isAddingTask = true;

   
  }
    onCancelAddTask() {
    this.isAddingTask = false;
  }
  onCreateTask(newTask : any){
     newTask.userId = this.user()?.id; // assign user
    this.tasks.update(tasks => [...tasks, newTask]);
    this.isAddingTask = false;

  }

}
