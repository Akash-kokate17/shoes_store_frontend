import { Component } from '@angular/core';
import { FilterComponent } from "../filter/filter.component";
import { NikeMainComponent } from "../nike-main/nike-main.component";

@Component({
  selector: 'app-nike',
  standalone: true,
  imports: [FilterComponent, NikeMainComponent],
  templateUrl: './nike.component.html',
  styleUrl: './nike.component.css'
})
export class NikeComponent {

}
