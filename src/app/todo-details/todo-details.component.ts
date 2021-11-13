import { Component, OnInit } from '@angular/core';
import { TodoJob, TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todoDetails : TodoJob[] = []
  displayedColumns : string[] = []
  constructor(private service:TodoServiceService) { } 

  ngOnInit(): void {
    this.todoDetails = this.service.getDetails()
    this.displayedColumns = this.service.getColumnNames()
  }

}
