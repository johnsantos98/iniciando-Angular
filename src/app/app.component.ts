import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { todo } from './../models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  public todos: todo[]= [];
  public title: String = 'Minhas tarefas';
  public form!: FormGroup;


  constructor(private fb: FormBuilder) {
   this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required,
      ])]
    });

    this.load();



    this.todos.push(new todo(1, 'Passear com o cachorro', false));
    this.todos.push(new todo(2, 'ir ao supermercado', false));
    this.todos.push(new todo(3, 'corta o cabelo', true));
  }

  add(){
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1
    this.todos.push(new todo(id , title , false));
    this.save();
    this.clear();
  }

  clear(){
    this.form.reset();
  }

  remove(todo: todo){
  const index = this.todos.indexOf(todo);
  if(index !== - 1){
    this.todos.splice(index, 1);
  }
  this.save();
  }

markAsDone(todo: todo){
todo.done= true;
this.save();
}

markAsUndone(todo: todo){
  todo.done = false;
  this.save();

}

save(){
  const data = JSON.stringify(this.todos);
  localStorage.setItem('todos', data);
}

load(){
const data = localStorage.getItem('todos');
this.todos = JSON.parse('data');


}

}
