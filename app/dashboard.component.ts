import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private router: Router,
    private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().then(todos => this.todos = todos);
  }
}
