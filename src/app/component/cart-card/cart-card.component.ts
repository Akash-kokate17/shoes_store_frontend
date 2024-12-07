import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css',
  inputs: ['product'],
  outputs: ['renderPriceDetails','renderProducts'],
})
export class CartCardComponent {
  product: any;
  shoe: any;

  renderPriceDetails = new EventEmitter();
  renderProducts = new EventEmitter();

  constructor() {
    this.loadCart();
  }

  loadCart() {
    const localStore = localStorage.getItem('cartArr');
    this.shoe = localStore ? JSON.parse(localStore) : [];
    console.log(this.shoe,'loadCart');
  }

  increaseShoeCount(product: any) {
    const manageShoeCount = this.shoe.find(
      (prod: any) => prod.id === product.id
    );
    if (this.product.count < 3) {
      this.product.count++;
      if (manageShoeCount) {
        manageShoeCount.count = this.product.count;
        this.updateLocalStorage();
      }
      this.renderPriceDetails.emit();
    } else {
      alert("you can't add more that 3 items");
    }
  }

  decrementShoeCount(product: any) {
    const manageShoeCount = this.shoe.find(
      (prod: any) => prod.id === product.id
    );
    if (this.product.count === 1) {
      alert("you're trying to add product in minus");
    } else if (this.product.count > 1) {
      this.product.count--;
      if (manageShoeCount) {
        manageShoeCount.count = this.product.count;
        this.updateLocalStorage();
      }
      this.renderPriceDetails.emit();
    }
  }

  updateLocalStorage() {
    localStorage.setItem('cartArr', JSON.stringify(this.shoe));
  }

  // removeProductFromCart for delete item from cart;

  removeProductFromCart(product: any) {
    console.log(product,'product');
    console.log(this.shoe,'shoe')
     this.shoe = this.shoe.filter((shoe:any)=>{
      return !(shoe.id === product.id && shoe.size[0] === product.size[0]);
    })
    console.log(this.shoe)
    this.updateLocalStorage();
    this.renderProducts.emit();
    this.renderPriceDetails.emit();
  } 
}
