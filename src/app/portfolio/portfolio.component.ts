import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
 imgs: string[] = [
    './assets/imgs2.png',
    './assets/imgs3.png',
    './assets/imgs4.png',
    './assets/imgs2.png',
    './assets/imgs3.png',
    './assets/imgs4.png',

  ];
  imgSrc: string = '';
  click: boolean = false;
  modelOpen(i: number): void {
    this.imgSrc = this.imgs[i];
    this.click = true;
  }
  modelClose(e: Event): void {
    if (!(e?.target instanceof HTMLImageElement)) {
      this.click = false;
    }
  }

}

