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
  remove(todo: todo){
  const index = this.todos.indexOf(todo);
  if(index !== - 1){
    this.todos.splice(index, 1);

  }
  }

markAsDone(todo: todo){
todo.done= true;
}

markAsUndone(todo: todo){
  todo.done = false;

}


}


