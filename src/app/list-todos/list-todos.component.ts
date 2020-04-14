import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';


export class Todo {
  constructor(public id:number, public description:string, public done:boolean, public targetDate:Date){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})


export class ListTodosComponent implements OnInit {

  todos:Todo[];
  message:string;
  /*
  todos = [
    new Todo(1, 'learn todo', false, new Date()),
    new Todo(2, 'learn angular', false, new Date()),
    new Todo(3, 'spring boot', false, new Date())
  ]
  */
    /*
    {
      id:1,
      description:'learn todo'
    },
    {
      id:2,
      description:'learn angular'
    }*/
  constructor(
    private service:TodoDataService,
    private router:Router) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos(){
    this.service.retrieveAllTodos('kk').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    console.log('deleted' + id);
    this.service.deleteTodo('kk', id).subscribe(
      response => {
        console.log(response);
        this.message = 'delete successful';
        this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    console.log('updated ' + id);
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
