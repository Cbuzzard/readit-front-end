import { Component, AfterViewInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'readit-front-end';
  background;

  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e) {
    this.background.style.backgroundPositionX = -e.offsetX/40 + "px";
    this.background.style.backgroundPositionY = -e.offsetY/30 + "px";
    console.log(e);
  }

  constructor(private elementRef: ElementRef){}

  ngAfterViewInit(): void {
    this.background = this.elementRef.nativeElement.querySelector('#background');
  }

}
