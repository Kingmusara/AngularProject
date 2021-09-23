import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem';
import { CartItems } from '../models/cartitems';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCard(todo : Todos){
    let item = CartItems.find(c=> c.todos.title === todo.title)
    
    if(item){
      item.quantity+=1
    }
    else {
      let cartItem = new CartItem
      cartItem.todos = todo
      cartItem.quantity =1
      CartItems.push(cartItem)
    }
  
  }
  removeFromCart( todo : Todos){
    let item:CartItem = CartItems.find(c=> c.todos.title === todo.title)
    CartItems.splice(CartItems.indexOf(item), 1)
  }
  list(){
    return CartItems
  }
}

