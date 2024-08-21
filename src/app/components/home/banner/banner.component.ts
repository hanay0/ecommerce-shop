import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../core/services/get-data.service';
import { BannerInfo } from '../../../core/models/banner-info';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  bannerData!: any;

  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.getBannerInfo().subscribe(res => {
      this.bannerData = res;
    })  
  }
}
