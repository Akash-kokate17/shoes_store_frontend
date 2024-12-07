import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { NikeInterface } from '../../model/nike-interface';
import { fetchNikeProducts } from '../../nike_management/action/nikeAction';
import { from, map, Observable } from 'rxjs';
import { MainCardComponent } from '../main-card/main-card.component';

@Component({
  selector: 'app-nike-main',
  standalone: true,
  imports: [FormsModule, CommonModule, MainCardComponent],
  templateUrl: './nike-main.component.html',
  styleUrls: ['./nike-main.component.css'],
  inputs: ['selectedDiscount', 'selectedColor', 'minVal', 'maxVal'],
})
export class NikeMainComponent {
  selectedDiscount: any;
  selectedColor: any;
  nikeShoes: Observable<NikeInterface[]> = from([]);
  nikeShoesCopy: Observable<NikeInterface[]> = this.nikeShoes;
  minVal: any;
  maxVal: any;

  constructor(private store: Store<{ nike: NikeInterface[] }>) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (
      simpleChanges['selectedDiscount'] ||
      simpleChanges['selectedColor'] ||
      simpleChanges['minVal'] ||
      simpleChanges['maxVal']
    ) {
      console.log(
        this.selectedColor,
        this.selectedDiscount,
        this.minVal,
        this.maxVal
      );
      this.applyFilters();
    }
  }

  applyFilters() {
    this.nikeShoesCopy = this.nikeShoes.pipe(
      map((products: NikeInterface[]) => {
        return products.filter((shoe: any) => {
          let discountValue = parseInt(shoe.discount, 10);

          let discountValid =
            this.selectedDiscount && this.selectedDiscount.length > 0
              ? this.selectedDiscount.some(
                  (discount: number) => discountValue >= discount
                )
              : true;

          let colorValid =
            this.selectedColor && this.selectedColor.length > 0
              ? this.selectedColor.includes(shoe.color)
              : true;

              let priceRangeValid = (): any => {
                const maxLimit =
                  this.maxVal === '3001+' ? 3001 : parseInt(this.maxVal, 10);
                const minLimit =
                  this.minVal !== 'Min' ? parseInt(this.minVal, 10) : null;
    
                if (minLimit !== null && maxLimit === 3001) {
                  return parseInt(shoe.price, 10) >= minLimit;
                }
                if (minLimit !== null && maxLimit <= 3000) {
                  return (
                    parseInt(shoe.price, 10) >= minLimit &&
                    parseInt(shoe.price, 10) <= maxLimit
                  );
                }
                if (minLimit === null && maxLimit === 3001) {
                  return true;
                }
                if (minLimit === null && maxLimit <= 3000) {
                  return parseInt(shoe.price, 10) <= maxLimit;
                }
    
                return true;
              };

          return discountValid && colorValid && priceRangeValid();
        });
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(fetchNikeProducts());
    this.nikeShoes = this.store.select((state) => state.nike);
    this.nikeShoesCopy = this.store.select((state) => state.nike);
  }
}
