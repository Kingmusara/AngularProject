import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  // todosResponseModel : TodoResponseModel={
  //   data :this.todos,message:"",success:true
  // }

  
  apiUrl = "https://jsonplaceholder.typicode.com"



  constructor( private httpClient :HttpClient) { }

  getTodos() : Observable<Todos[]>{
    let newPath = this.apiUrl+"/todos"
    return this.httpClient.get<Todos[]>(newPath);
  }
  
  add(todoModel : Todos):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/todos/add",todoModel)
  }
}


