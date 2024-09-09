import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../core/services/get-data.service';

@Component({
  selector: 'app-dress-style',
  templateUrl: './dress-style.component.html',
  styleUrl: './dress-style.component.scss'
})
export class DressStyleComponent implements OnInit {
  homeCategories: { id: number; name: string; banner: string; }[] = [];
  constructor (private dataService: GetDataService) {}

  ngOnInit(): void {
    this.dataService.getHomeCategories().subscribe(res => {
      console.log(res.data.categories);
      if (Array.isArray(res.data.categories)) {
        this.homeCategories = res.data.categories.map(category => ({ id: category.id, name: category.name, banner: category.banner }));
      } else {
        console.error('res.data.categories is not an array');
      }
    })
  }
}
