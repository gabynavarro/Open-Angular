import { Component, OnInit } from '@angular/core';
import { Itask, Levels } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
   task1:Itask ={
    title: "Hacer compras",
    description:"realizar las compras del super",
    completed: false,
    level: Levels.Info
  }
  task2:Itask ={
    title: "Perro",
    description:"sacar a pasear al perro",
    completed: true,
    level: Levels.Urgent
  }
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(task:Itask){
    alert(`se elimina ${task.title}`)
  }
}
