import { Component, inject, Input } from '@angular/core';
import { type Task } from './task.module';
import { TasksService } from '../tasks.services';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  private taskService=inject(TasksService)

  onCompleteTask(){
    this.taskService.removeTask(this.task.id)
  }
}
