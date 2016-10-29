import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { ProgressbarModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { TodoComponent }      from './todo.component';
import { TodoService }          from './todo.service';
import { routing }              from './app.routing';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    ProgressbarModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoComponent,
  ],
  providers: [
    TodoService,
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
