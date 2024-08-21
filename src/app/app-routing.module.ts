import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/home/banner/banner.component';
import { HomeWrapperComponent } from './components/home/home-wrapper/home-wrapper.component';

const routes: Routes = [
  { path: '', component: HomeWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
