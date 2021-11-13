import { Component, OnInit } from '@angular/core';
import { TodoJob, TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoDetails : TodoJob[] = []
  displayedColumns : string[] = []
  constructor(private service:TodoServiceService) { }

  ngOnInit(): void {
    this.todoDetails = this.service.getDetails()
    this.displayedColumns = this.service.getColumnNames()
  }

}
