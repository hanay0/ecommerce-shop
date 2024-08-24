import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../core/services/get-data.service';
import { HomeProducts } from '../../../core/models/home-products';

@Component({
  selector: 'app-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.scss'
})
export class TopSellingComponent implements OnInit {
  // topSellingProducts!: HomeProducts[];
  topSellingData!: HomeProducts[];

  constructor(private getDataService: GetDataService) {  }

  ngOnInit(): void {
    this.getDataService.getTopSelling().subscribe(res => {
      this.topSellingData = res;
    })
  }
}
