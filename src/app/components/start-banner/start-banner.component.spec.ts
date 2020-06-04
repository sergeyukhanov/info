import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartBannerComponent } from './start-banner.component';

describe('StartBannerComponent', () => {
  let component: StartBannerComponent;
  let fixture: ComponentFixture<StartBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
