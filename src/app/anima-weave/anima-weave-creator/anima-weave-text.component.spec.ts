import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaWeaveTextComponent } from './anima-weave-text.component';

describe('AnimaWeaveTextComponent', () => {
  let component: AnimaWeaveTextComponent;
  let fixture: ComponentFixture<AnimaWeaveTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaWeaveTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaWeaveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
