import { Component } from '@angular/core';
import { CartCardComponent } from "../cart-card/cart-card.component";
import { CartPriceDetailsComponent } from "../cart-price-details/cart-price-details.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent, CartPriceDetailsComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
products:any[] = [];

constructor(){
 this.loadCartArr();
}

loadCartArr(){
  const cartItem = localStorage.getItem('cartArr');
  this.products = cartItem ? JSON.parse(cartItem) : [];
  console.log(this.products,'cart')
}

onRenderProducts() {
  // Re-load the cart data whenever an item is removed
  this.loadCartArr();
}
}
