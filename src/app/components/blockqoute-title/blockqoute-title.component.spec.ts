import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockqouteTitleComponent } from './blockqoute-title.component';

describe('BlockqouteTitleComponent', () => {
  let component: BlockqouteTitleComponent;
  let fixture: ComponentFixture<BlockqouteTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockqouteTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockqouteTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
