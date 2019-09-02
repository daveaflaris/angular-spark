import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaWeaveListComponent } from './anima-weave-list.component';

describe('AnimaWeaveListComponent', () => {
  let component: AnimaWeaveListComponent;
  let fixture: ComponentFixture<AnimaWeaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaWeaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaWeaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
