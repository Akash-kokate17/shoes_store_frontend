import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NikeBestProductComponent } from '../nike-best-product/nike-best-product.component';
import { PumaBestProductsComponent } from '../puma-best-products/puma-best-products.component';
import { BestAdidasShoesComponent } from '../best-adidas-shoes/best-adidas-shoes.component';
import { FilterComponent } from '../filter/filter.component';
import { NikeMainComponent } from '../nike-main/nike-main.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CarouselComponent,
    NikeBestProductComponent,
    PumaBestProductsComponent,
    BestAdidasShoesComponent,
    FilterComponent,
    NikeMainComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
