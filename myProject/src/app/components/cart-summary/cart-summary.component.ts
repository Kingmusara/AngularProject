import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartitem';
import { Todos } from 'src/app/models/todos';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cartItems : CartItem[] = []
  constructor( private cartService : CartService,
    private  toastrService : ToastrService ) { 

  }

  ngOnInit(): void {
    this.getCart()
  }

  getCart() 
    {
          this.cartItems= this.cartService.list()
    }
  
    removeFromCart(todo : Todos){
      this.cartService.removeFromCart(todo)
      this.toastrService.error("Silindi aga",todo.title)
    }

}
