import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, BannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  exports: [HomeComponent, HeaderComponent, FooterComponent],

})
export class HomeModule { }
