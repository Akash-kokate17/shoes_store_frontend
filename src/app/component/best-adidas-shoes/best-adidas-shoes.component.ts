import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdidasInterface } from '../../model/adidas-interface';
import { CommonModule } from '@angular/common';
import { fetch_adidas_action } from '../../nike_management/action/adidas';
import { map, Observable } from 'rxjs';
import { TitleBarComponent } from "../title-bar/title-bar.component";
import { CardComponent } from "../card/card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-adidas-shoes',
  standalone: true,
  imports: [CommonModule, TitleBarComponent, CardComponent,RouterLink],
  templateUrl: './best-adidas-shoes.component.html',
  styleUrl: './best-adidas-shoes.component.css'
})
export class BestAdidasShoesComponent {

  adidas_products: Observable<AdidasInterface[]> | undefined;
  adidas_title:string = "Adidas Best Products"

 constructor(private store:Store<{adidas:AdidasInterface[]}>){}

 ngOnInit(){
  this.store.dispatch(fetch_adidas_action());

  this.adidas_products = this.store.select((state)=>state.adidas).pipe(
    map((products:AdidasInterface[])=>products.slice(0,4))
  )
 }
}
