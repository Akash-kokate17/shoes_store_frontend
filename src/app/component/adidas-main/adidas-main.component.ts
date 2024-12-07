import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { from, map, Observable } from 'rxjs';
import { MainCardComponent } from '../main-card/main-card.component';
import { AdidasInterface } from '../../model/adidas-interface';
import { fetch_adidas_action } from '../../nike_management/action/adidas';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-adidas-main',
  standalone: true,
  imports: [FormsModule, CommonModule, MainCardComponent], 
  templateUrl: './adidas-main.component.html',
  styleUrl: './adidas-main.component.css',
  inputs: ['selectedDiscount', 'selectedColor', 'minVal', 'maxVal'],
})
export class AdidasMainComponent {
  selectedDiscount: any;
  selectedColor: any;
  adidasShoes: Observable<AdidasInterface[]> = from([]);
  adidasShoesCopy: Observable<AdidasInterface[]> = this.adidasShoes;
  minVal: any;
  maxVal: any;

  constructor(private store: Store<{ adidas: AdidasInterface[] }> ,private activatedRoute:ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.routeConfig,'activatedRoutes')
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (
      simpleChanges['selectedDiscount'] ||
      simpleChanges['selectedColor'] ||
      simpleChanges['minVal'] ||
      simpleChanges['maxVal']
    ) {
      this.applyFiltersPuma();
    }
  }

  applyFiltersPuma() {
    this.adidasShoesCopy = this.adidasShoes.pipe(
      map((products: AdidasInterface[]) => {
        return products.filter((shoe: any) => {
          let discountValue = parseInt(shoe.discount, 10);

          let discountValid =
            this.selectedDiscount && this.selectedDiscount.length > 0
              ? this.selectedDiscount.some(
                  (discount: number) => discountValue >= discount
                )
              : true;

          // Color filtering logic
          let colorValid =
            this.selectedColor && this.selectedColor.length > 0
              ? this.selectedColor.includes(shoe.color)
              : true;

          // Price range logic
          let priceRangeValid = (): any => {
            const maxLimit =
              this.maxVal === '3001+' ? 3001 : parseInt(this.maxVal, 10);
            const minLimit =
              this.minVal !== 'Min' ? parseInt(this.minVal, 10) : null;

            if (minLimit !== null && maxLimit === 3001) {
              console.log('1')
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
    this.store.dispatch(fetch_adidas_action());
    this.adidasShoes = this.store.select((state) => state.adidas);
    this.adidasShoesCopy = this.store.select((state) => state.adidas);
  }
}
