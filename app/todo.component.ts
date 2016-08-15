import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo';
import { TodoService } from './todo.service';
import { PROGRESSBAR_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'my-todos',
  templateUrl: 'app/todo.component.html',
  directives: [PROGRESSBAR_DIRECTIVES],
  styleUrls:  ['app/todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  max: number;
  dynamic: number;
  @Input() todo: Todo;

  constructor(
    private router: Router,
    private todoService: TodoService) { }

  getTodos() {
    this.todoService.getTodos().then(todos => {
      this.todos = todos
      this.max = todos.length
      this.dynamic = todos.filter(item => item.done).length;
    });
  }
  flup(todo){
    todo.done = !todo.done;
    this.todoService.save(todo).then(todo => this.getTodos());
  }
  delete(todo){
    this.todoService.delete(todo).then(todo => this.getTodos());
  }
  addTodo(){
    this.todoService.save(this.todo).then( todo => {
      this.getTodos();
      this.todo = new Todo()
    });
  }

  ngOnInit() {
    this.getTodos();
    this.todo = new Todo();
  }
}
