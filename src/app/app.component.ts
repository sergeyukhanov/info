import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {TweenMax} from "gsap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'app';

  constructor(
    private app: ElementRef,
  ) {

  }

  ngOnInit() {
    // const initContainer = this.app.nativeElement.querySelector('.init-state');
    // TweenMax.to(initContainer, 1.2, {opacity: 0, onComplete: function() {
    //     initContainer.remove();
    //   }})
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.app.nativeElement.querySelector('.init-state').classList.add('init-state--active')
    }, 300);

  }

}
