import { CommonModule } from '@angular/common';
import { Component, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-cart-price-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-price-details.component.html',
  styleUrl: './cart-price-details.component.css',
})
export class CartPriceDetailsComponent {
  cartArr: any;
  originalPrice: any;
  price: any;
  discount: any;

  constructor() {
    this.loadCartData();
    this.calculatePriceDetails();
  }

  loadCartData() {
    const cartData = localStorage.getItem('cartArr');
    this.cartArr = cartData ? JSON.parse(cartData) : [];
  }

  calculatePriceDetails() {
    this.loadCartData();

    // calculating all the originalPrice
    this.originalPrice = this.cartArr.reduce((total: number, item: any) => {
      return total + item.originalPrice * item.count;
    }, 0);

    //calculating all the price after discount
    this.price = this.cartArr.reduce((total: number, item: any) => {
      return total + item.count * item.price;
    }, 0);

    this.discount = this.originalPrice - this.price;
  }
}
