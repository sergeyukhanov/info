import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-start-banner',
  templateUrl: './start-banner.component.html',
  styleUrls: ['./start-banner.component.scss']
})
export class StartBannerComponent implements OnInit {

  @Input() showedContainer = false;
  @Output('aboutClick') aboutClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerClick() {
    this.aboutClick.emit();
  }

}
