import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  @Input() taskList: any[] = [];
  @Output() important = new EventEmitter<any>();
  @Output() complete = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  markImportant(task: any) {
    this.important.emit(task);
  }
  markComplete(task: any) {
    this.complete.emit(task);
  }

  deleteTask(id: number){
    this.delete.emit(id);
  }
}
