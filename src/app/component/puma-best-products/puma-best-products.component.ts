import { Component } from '@angular/core';
import { PumaInterface } from '../../model/puma-interface';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { fetchPumaProducts } from '../../nike_management/action/pumaAction';
import { CommonModule } from '@angular/common';
import { TitleBarComponent } from "../title-bar/title-bar.component";
import { CardComponent } from "../card/card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-puma-best-products',
  standalone: true,
  imports: [CommonModule, TitleBarComponent, CardComponent,RouterLink],
  templateUrl: './puma-best-products.component.html',
  styleUrl: './puma-best-products.component.css'
})
export class PumaBestProductsComponent {

  puma_products:Observable<PumaInterface[]> | undefined;
  puma_title:string = "Puma Best Products"

 constructor(private store:Store<{puma:PumaInterface[]}>){
 }

 ngOnInit(){
  this.store.dispatch(fetchPumaProducts())

  this.puma_products = this.store.select((state)=>state.puma).pipe(
    map((products:PumaInterface[])=>products.slice(1,5))
  )
 }
}
