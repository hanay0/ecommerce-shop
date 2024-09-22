import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { FooterComponent } from './components/UI/footer/footer.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeWrapperComponent } from './components/home/home-wrapper/home-wrapper.component';
import { LogosComponent } from './components/home/logos/logos.component';
import { NewArrivalsComponent } from './components/home/new-arrivals/new-arrivals.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TopSellingComponent } from './components/home/top-selling/top-selling.component';
import { DressStyleComponent } from './components/home/dress-style/dress-style.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomeWrapperComponent,
    LogosComponent,
    NewArrivalsComponent,
    ProductCardComponent,
    TopSellingComponent,
    DressStyleComponent,
    ReviewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
