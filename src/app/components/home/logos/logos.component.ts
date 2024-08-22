import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../../core/services/get-data.service';
import { LogoInfo } from '../../../core/models/logo-info';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.scss'
})
export class LogosComponent implements OnInit {
  logos!: LogoInfo[];
  constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataService.getLogos().subscribe(res => {
      this.logos = res;
    });
  }
}
