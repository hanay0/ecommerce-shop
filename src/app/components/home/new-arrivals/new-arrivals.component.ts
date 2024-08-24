import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../core/services/get-data.service';
import { HomeProducts } from '../../../core/models/home-products';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss'
})
export class NewArrivalsComponent implements OnInit {
  // newArrivals!: HomeProducts[];
  newArrivalsData!: HomeProducts[];
  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
      this.getDataService.getNewArrivals().subscribe(res => {
        this.newArrivalsData = res;
      })
  }
} 
