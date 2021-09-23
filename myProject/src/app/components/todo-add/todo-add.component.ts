import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup , Validator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  todoAddForm : FormGroup
  constructor( private formBuiledr : FormBuilder, private todoService : TodoService , private toastrService :ToastrService) {  }

  ngOnInit(): void {
    this.createTodoAddForm()
  }
  
  createTodoAddForm(){
      this.todoAddForm = this.formBuiledr.group({
        title : ["" ,Validators.required],
        id : ["" , Validators.required],
        completed : ["", Validators.required],
        categoryId : ["" , Validators.required]
      })
  }
  add(){
    if (this.todoAddForm.valid) {
      let todoModel =Object.assign({},this.todoAddForm.value) 
      console.log(todoModel)
      this.todoService.add(todoModel).subscribe(data=>{
        console.log(data)
    
        this.toastrService.success(data.message,"Tebrikss")
    
      })
      this.toastrService.success("Tebrikss")
    
    }
    else {
      this.toastrService.error("Kaydedilemedi")
    }

  }
}
