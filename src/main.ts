import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-todo-list',
  template: <h1>My Todo List</h1> <ul> <li *ngFor="let todo of todos">{{ todo.title }}</li> </ul> })
  export class TodoListComponent {
  todos: any[];
  
  constructor(private todoService: TodoService) {}
  
  ngOnInit() {
  this.todos = this.todoService.getTodos();
  }
  }
  
  import { Injectable } from '@angular/core';
  
  @Injectable({
  providedIn: 'root'
  })
  export class TodoService {
  private todos = [
  { title: 'Buy milk', completed: false },
  { title: 'Go to gym', completed: true },
  { title: 'Learn Angular', completed: false }
  ];
  
  getTodos() {
  return this.todos;
  }
  }