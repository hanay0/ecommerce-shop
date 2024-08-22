import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() data!: any;
  rating!: number;

  ngOnInit(): void {
      console.log(this.data);
      this.rating = this.data?.rating
  }
}
