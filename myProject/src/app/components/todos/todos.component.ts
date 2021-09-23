import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Todos } from 'src/app/models/todos';
import { CartService } from 'src/app/services/cart.service';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  dataloaded= false
  filterText :string =""
  todos : Todos[] = []
  

  constructor(private todoService : TodoService,
    private cartItem: CartService,
    private toastrService : ToastrService) {
    
  }
///*ngSwitch = icindeki degere karsilik
  ngOnInit(): void {
    this.getTodos()

  }

  getTodos(){
    console.log("Merh")
    this.todoService.getTodos().subscribe(response => {
      this.todos=response
      console.log("HEla nazli")
      this.dataloaded= true
    })
    console.log("SCE")
  }
  addtoCart( todo : Todos)
    {
      if(todo.id ===1 ){
      this.toastrService.warning(todo.title,"Basarli sekilde eklenemedi ")
      }
      else{
      this.toastrService.info(todo.title,"Basarli sekilde eklendi ")
      this.cartItem.addToCard(todo)
    } 
  }
}
