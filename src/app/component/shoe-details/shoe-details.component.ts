import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoe-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoe-details.component.html',
  styleUrl: './shoe-details.component.css',
})
export class ShoeDetailsComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  shoeData: any;
  cartArr: any[] = [];
  count: number = 0;
  size: any;

  buyNow(){
    alert('Your Item Is Ready For Dispatch')
  }

  ngOnInit() {
  this.activatedRoute.queryParams.subscribe((product: any) => {
    this.shoeData = { ...product };

    this.shoeData.sizes = Array.isArray(this.shoeData.sizes) 
      ? this.shoeData.sizes 
      : [this.shoeData.sizes];

    this.size = this.shoeData.sizes[0] || null;
  });
}

  // this add to cart function checked if product not exist add in localStorage and if size is different that product also add if product already added and size is matched product is already exist and redirect to cart
  addToCart(product: any) {
    
    if (!this.shoeData || !this.shoeData.sizes || this.shoeData.sizes.length === 0) {
      alert('No sizes available for this product.');
      return; 
    }
    const productCopy = { ...product, size: [this.size], count: 1 };

    let storedArr = localStorage.getItem('cartArr');
    this.cartArr = storedArr ? JSON.parse(storedArr) : [];

    let productExist = this.cartArr.findIndex(
      (shoe) => shoe.id === productCopy.id
    );
    console.log(productExist, 'productExist');
    let sizeAlreadySelected =
      productExist > -1 && this.cartArr[productExist].size == this.size;

    if (productExist === -1) {
      this.cartArr.unshift(productCopy);
      localStorage.setItem('cartArr', JSON.stringify(this.cartArr));
      alert('product added to the cart');
    } else if (!sizeAlreadySelected) {
      this.cartArr.unshift(productCopy);
      localStorage.setItem('cartArr', JSON.stringify(this.cartArr));
    } else {
      alert('item already added in cart');
    }
    console.log(this.cartArr, 'cart');
  }

  // selected size function;

  selectedSize(size: any, currentInd: number) {
    this.count = currentInd;
    this.size = size;
    console.log(this.size, 'size');
  }
}
