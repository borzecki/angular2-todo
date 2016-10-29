import { Component } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { TodoService }     from './todo.service';

@Component({
  selector: 'my-app',
  template: `
  <div class='container-fluid'>
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">DMN</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li [routerLinkActive]="['active']">
            <a [routerLink]="['/dashboard']">Dashboard</a>
          </li>
          <li [routerLinkActive]="['active']">
            <a [routerLink]="['/todo']">Todos</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  providers: [
    TodoService
  ]
})
export class AppComponent {}
