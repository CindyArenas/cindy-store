import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  images: string[] = [
    'assets/imagenes/banner02.png',
    'assets/imagenes/banner01.png',
    'assets/imagenes/banner03.png'
  ];
  constructor() { }

  ngOnInit(): void {
  }


}
