import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { newTask } from './add-task/add-task.model';
import { TasksService } from './tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;


  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onCompleteTask(id: string) {
    this.tasksService.removeTask(id)
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCLoseAddTask() {
    this.isAddingTask = false;
  }


}
