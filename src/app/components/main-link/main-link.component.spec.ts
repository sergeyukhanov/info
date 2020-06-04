import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLinkComponent } from './main-link.component';

describe('MainLinkComponent', () => {
  let component: MainLinkComponent;
  let fixture: ComponentFixture<MainLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
