import { todo } from './../models/todo.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public todos: todo[]= [];
  public title: String = 'Minhas tarefas';


  constructor() {
    this.todos.push(new todo(1, 'Passear com o cachorro', false));
    this.todos.push(new todo(2, 'ir ao supermercado', false));
    this.todos.push(new todo(3, 'corta o cabelo', true));



  }




}


