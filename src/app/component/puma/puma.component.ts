import { Component } from '@angular/core';
import { FilterComponent } from "../filter/filter.component";
import { PumaMainComponent } from "../puma-main/puma-main.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-puma',
  standalone: true,
  imports: [FilterComponent, PumaMainComponent,CommonModule,FormsModule],
  templateUrl: './puma.component.html',
  styleUrl: './puma.component.css'
})
export class PumaComponent {

}
