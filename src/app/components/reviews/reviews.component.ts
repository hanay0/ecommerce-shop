import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../core/services/get-data.service';
import { Review } from '../../core/models/home-reviews';
import { map } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  sectionTitle : string = '';
  responsiveOptions: any[] | undefined;

  constructor(private dataService: GetDataService) {}

  ngOnInit(): void {
    this.dataService.getReviews()
      .pipe(
        map(
          res => {
            res.reviews;
            this.sectionTitle = res.sectionTitle;
            return res.reviews;
          }
        )
      )
      .subscribe(reviews => {
        this.reviews = reviews;
        console.log(this.reviews);
        
      });
    }
}
