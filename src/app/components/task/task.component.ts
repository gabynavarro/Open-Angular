import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() {}
  @Input() task: Itask | undefined
  @Output() deleteTask : EventEmitter<Itask>=new EventEmitter<Itask>()

  ngOnInit(): void {};
  delete(){
    console.log("eliminar tarea", this.task?.title)
    this.deleteTask.emit(this.task) //notificamos al componente superiror la tarea a eliminar
  }
}
