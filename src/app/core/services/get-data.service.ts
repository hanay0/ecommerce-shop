import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BannerInfo } from '../models/banner-info';
import { LogoInfo } from '../models/logo-info';
import { HomeProducts } from '../models/home-products';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  readonly bannerInfoURL: string = "https://dummyjson.com/c/3ca1-976a-4c2f-bef4";
  readonly logosURLs: string = "https://dummyjson.com/c/01b7-9551-4f9f-a427";
  readonly newArrivalsURL: string = "https://api.mockfly.dev/mocks/683d5fd4-8cee-4501-89cb-698aac8b2f98/new_arrivals";
  readonly topSellingURL: string = "https://api.mockfly.dev/mocks/683d5fd4-8cee-4501-89cb-698aac8b2f98/top-selling";

  constructor(private http: HttpClient) { }

  getBannerInfo(): Observable<BannerInfo> {
    return this.http.get<BannerInfo>(this.bannerInfoURL)
  }

  getLogos(): Observable<LogoInfo[]> {
    return this.http.get<LogoInfo[]>(this.logosURLs)
  }

  getNewArrivals(): Observable<HomeProducts[]> {
    return this.http.get<HomeProducts[]>(this.newArrivalsURL)
  }

  // getTopSelling()
  getTopSelling(): Observable<HomeProducts[]> {
    return this.http.get<HomeProducts[]>(this.topSellingURL)
  }
}
