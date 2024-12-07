import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './main-card.component.html',
  styleUrl: './main-card.component.css',
  inputs:['product']
})
export class MainCardComponent {
constructor(){}

 product:any;

}
