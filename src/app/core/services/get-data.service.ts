import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BannerInfo } from '../models/banner-info';
import { LogoInfo } from '../models/logo-info';
import { HomeProducts } from '../models/home-products';
import { HomeCategories } from '../models/home-categories';
import { HomeReviews } from '../models/home-reviews';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  readonly bannerInfoURL: string = "https://dummyjson.com/c/3ca1-976a-4c2f-bef4";
  readonly logosURLs: string = "https://dummyjson.com/c/01b7-9551-4f9f-a427";
  readonly newArrivalsURL: string = "https://api.mockfly.dev/mocks/683d5fd4-8cee-4501-89cb-698aac8b2f98/new_arrivals";
  readonly topSellingURL: string = "https://api.mockfly.dev/mocks/683d5fd4-8cee-4501-89cb-698aac8b2f98/top-selling";
  readonly categoriesURL: string = "https://dummyjson.com/c/438c-f5d9-4b64-baf4";
  readonly reviewsURL: string = "https://dummyjson.com/c/686e-68d6-4ed4-901f";

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

  getHomeCategories(): Observable<HomeCategories> {
    return this.http.get<HomeCategories>(this.categoriesURL)
  }

  getReviews(): Observable<HomeReviews> {
    return this.http.get<HomeReviews>(this.reviewsURL)
  }
}
