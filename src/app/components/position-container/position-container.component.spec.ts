import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionContainerComponent } from './position-container.component';

describe('PositionContainerComponent', () => {
  let component: PositionContainerComponent;
  let fixture: ComponentFixture<PositionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
