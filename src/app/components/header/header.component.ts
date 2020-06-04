import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {EventListener} from "@angular/core/src/debug/debug_node";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  openedMenu: boolean;
  animationInitStart: boolean;
  menuData = [
    {
      routerLink: 'index',
      title: 'About me',

    },
    {
      routerLink: 'skills',
      title: 'Skills',

    },
    {
      routerLink: 'portfolio',
      title: 'Portfolio',

    },
    {
      routerLink: 'blog',
      title: 'Blog',

    },
    {
      routerLink: 'contacts',
      title: 'Contacts',
    },
  ];
  picturesData = [
    {
      active: 'index',
      image: 'photo1.jpg',
    },
    {
      active: 'skills',
      image: 'photo2.jpg',
    },
    {
      active: 'portfolio',
      image: 'photo3.jpg',
    },
    {
      active: 'blog',
      image: 'photo4.jpg',
    },
    {
      active: 'contacts',
      image: 'photo5.jpg',
    }
  ];

  constructor(
    private menuEl: ElementRef,
  ) { }

  ngOnInit() {
  }

  currentLocation() {
    const location = window.location.pathname.substr(1);
    return location;
  }

  hoverCurrentPicture(index) {
    this.menuEl.nativeElement
      .querySelector('.main-nav__picture-area:nth-child(' + (index + 1) + ')')
      .classList.add('hover-active');
  }

  leaveCurrentPicture(index) {
    this.menuEl.nativeElement
      .querySelector('.main-nav__picture-area:nth-child(' + (index + 1) + ')')
      .classList.remove('hover-active');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.animationInitStart = true;
    }, 300);
  }

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
    if (this.openedMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }

}

