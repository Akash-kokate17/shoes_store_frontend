import { Component } from '@angular/core';
import { FilterComponent } from "../filter/filter.component";
import { AdidasMainComponent } from "../adidas-main/adidas-main.component";

@Component({
  selector: 'app-adidas',
  standalone: true,
  imports: [FilterComponent, AdidasMainComponent],
  templateUrl: './adidas.component.html',
  styleUrl: './adidas.component.css'
})
export class AdidasComponent {

}
