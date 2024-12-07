import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterMaxvalarrPipe } from '../../pipes/filter-maxvalarr.pipe';
import { FilterMinValArrPipe } from "../../pipes/filter-min-val-arr.pipe";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterMaxvalarrPipe, FilterMinValArrPipe],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  constructor() {}
  minVal: number[] = [500, 1000, 1500, 2000, 2500, 3000];
  maxVal: any[] = ['3001+', 500, 1000, 1500, 2000, 2500, 3000];
  selectedValMin: any = 'Min';
  selectedValMax: any = this.maxVal[0];

  selectedColor: any = new Set();
  selectedColorArr: any[] = [];

  selectedDiscount: any = new Set();
  selectedDiscountArr: any[] = [];


  // select discount function
  onDiscountChange(event: any, number: Number) {
    if (event.target.checked) {
      this.selectedDiscount.add(number);
    } else {
      this.selectedDiscount.delete(number);
    }
    this.selectedDiscountArr = Array.from([...this.selectedDiscount]);
  }

  // select color function
  onColorSelected(event: any) {
    if (event.target.checked) {
      this.selectedColor.add(event.target.value);
    } else {
      this.selectedColor.delete(event.target.value);
    }
    this.selectedColorArr = Array.from([...this.selectedColor]);
  }
}
