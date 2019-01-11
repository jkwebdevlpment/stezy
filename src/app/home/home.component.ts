import { Component, OnInit } from '@angular/core';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

customOptions: any = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  autoplay: true,
  navSpeed: 700,
  navText: ['', ''],
  nav: false,
  responsive: {0: {items: 1},400: { items: 1},740: {items: 1},940: {items: 1}},
  
  //autoplaySpeed:1
}
  customOptionsThree: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: { 0: { items: 2 }, 400: { items: 2 }, 740: { items: 2 }, 940: { items: 3 } },
    nav: true,
    //autoplaySpeed:1
  }

activeSlidesA: SlidesOutputData;
activeSlidesB: SlidesOutputData;
activeSlidesC: SlidesOutputData;
slidesStoreA: any[];
slidesStoreB: any[];
slidesStoreC: any[];

constructor() {
  this.slidesStoreA = [
    {
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    },
    {
      src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    },
    {
      src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    },
    {
      src: "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    }
  ]
  this.slidesStoreB = this.slidesStoreA
  this.slidesStoreC = this.slidesStoreA

}

getDataA(data: SlidesOutputData) {
  this.activeSlidesA = data;
  console.log(this.activeSlidesA);
}
getDataB(data: SlidesOutputData) {
    this.activeSlidesB = data;
    console.log(this.activeSlidesB);
}
getDataC(data: SlidesOutputData) {
    this.activeSlidesC = data;
    console.log(this.activeSlidesC);
}
ngOnInit(): void{

}

}
