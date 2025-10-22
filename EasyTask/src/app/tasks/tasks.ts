import { Component, Input, signal } from '@angular/core';
import { Task } from "./task/task";
import {dummyTasks} from "../../app/dummy_tasks";


@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() user :any
  tasks = signal(dummyTasks)

  onCompleate(id:string){
    this.tasks.update(tasks => tasks.filter(t => t.id !== id)); 

  }

}
