import { Component, OnInit } from '@angular/core';

// import { TweenMax, TimelineMax, TweenLite } from 'gsap';
import * as ScrollMagic from 'ScrollMagic';
// import 'ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  showStartBanner: boolean;
  // ctrl = new ScrollMagic.Controller({addIndicators: true});
  ctrl = new ScrollMagic.Controller();

  constructor() { }

  ngOnInit() {
    this.showStartBanner = true;
    setTimeout(() => {
      document.getElementById('start-banner').classList.remove('hidden');

    }, 500);

    const aboutScene = new ScrollMagic.Scene({
      triggerElement: '#about-trigger',
      triggerHook: 0.7,
    })
      .addTo(this.ctrl);

    aboutScene.on("start", function (event) {
      document.getElementById('about-container').classList.toggle('hidden')
    });

    const skillsScene = new ScrollMagic.Scene({
      triggerElement: '#skills-trigger',
      triggerHook: 0.7,
    })
      .addTo(this.ctrl);

    skillsScene.on("start", function (event) {
      document.getElementById('skills-container').classList.toggle('hidden')
    });

    const positionScene = new ScrollMagic.Scene({
      triggerElement: '#position-trigger',
      triggerHook: 0.7,
    })
      .addTo(this.ctrl);

    positionScene.on("start", function (event) {
      document.getElementById('position-container').classList.toggle('hidden')
    });

    // const footerScene = new ScrollMagic.Scene({
    //   triggerElement: '#footer-trigger',
    //   triggerHook: 0.7,
    // })
    //   .addTo(this.ctrl);
    //
    // footerScene.on("start", function (event) {
    //   document.getElementById('footer-container').classList.toggle('hidden')
    // });
  }

  showMoreClick() {
    const bannerHeight = document.getElementById('start-banner').offsetHeight - 100;
    window.scrollTo({top: bannerHeight, behavior: 'smooth'});
  }

}
