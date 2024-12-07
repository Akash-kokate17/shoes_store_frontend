import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchNikeProducts } from '../../nike_management/action/nikeAction';
import { NikeInterface } from '../../model/nike-interface';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { CardComponent } from "../card/card.component";
import { TitleBarComponent } from "../title-bar/title-bar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nike-best-product',
  standalone: true,
  imports: [CommonModule, CardComponent, TitleBarComponent,RouterLink],
  templateUrl: './nike-best-product.component.html',
  styleUrl: './nike-best-product.component.css',
})
export class NikeBestProductComponent {
  nike_product: Observable<NikeInterface[]> | undefined;
  nike_title:string = "Nike Best Products"

  constructor(private store: Store<{ nike: NikeInterface[] }>) {}

  ngOnInit() {
    this.store.dispatch(fetchNikeProducts());

    this.nike_product = this.store.select((state) => state.nike).pipe(
      map((products:NikeInterface[])=>products.slice(4,8))
    );
  }
}
