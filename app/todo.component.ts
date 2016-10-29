import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-todos',
  templateUrl: 'app/todo.component.html',
  styleUrls:  ['app/todo.component.css']
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
  flup(todo: any){
    todo.done = !todo.done;
    this.todoService.save(todo).then(todo => this.getTodos());
  }
  delete(todo: any){
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
