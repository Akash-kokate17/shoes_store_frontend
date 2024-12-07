import { Component } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css',
  inputs:["nike_title"]
})
export class TitleBarComponent {
  nike_title:any;
}
