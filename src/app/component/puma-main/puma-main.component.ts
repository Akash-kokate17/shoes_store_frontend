import { Component, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { from, map, Observable } from 'rxjs';
import { MainCardComponent } from '../main-card/main-card.component';
import { PumaInterface } from '../../model/puma-interface';
import { fetchPumaProducts } from '../../nike_management/action/pumaAction';

@Component({
  selector: 'app-puma-main',
  standalone: true,
  imports: [FormsModule, CommonModule, MainCardComponent],
  templateUrl: './puma-main.component.html',
  styleUrl: './puma-main.component.css',
  inputs: ['selectedDiscount', 'selectedColor', 'minVal', 'maxVal'],
})
export class PumaMainComponent {
  selectedDiscount: any;
  selectedColor: any;
  pumaShoes: Observable<PumaInterface[]> = from([]);
  pumaShoesCopy: Observable<PumaInterface[]> = this.pumaShoes;
  minVal: any;
  maxVal: any;

  constructor(private store: Store<{ puma: PumaInterface[] }>) {}

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
    this.pumaShoesCopy = this.pumaShoes.pipe(
      map((products: PumaInterface[]) => {
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
    this.store.dispatch(fetchPumaProducts());
    this.pumaShoes = this.store.select((state) => state.puma);
    this.pumaShoesCopy = this.store.select((state) => state.puma);
  }
}
