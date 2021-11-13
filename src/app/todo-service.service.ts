import { Injectable } from '@angular/core';

export interface TodoJob{
  id: number;
  name: string;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  columnNames = [
    'id',
    'name',
    'duration',
  ]
  
  todoDetails: TodoJob[] = [
    {id: 1, name: "job-a", duration:10},
    {id: 2, name: "job-b", duration:20},
    {id: 3, name: "job-c", duration:30},
  ]

  getColumnNames(){
    return this.columnNames;
  }
  getDetails(){
    return this.todoDetails
  }

  constructor() { }
}
