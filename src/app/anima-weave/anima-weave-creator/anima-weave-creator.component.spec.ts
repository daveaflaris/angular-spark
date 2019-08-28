import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaWeaveCreatorComponent } from './anima-weave-creator.component';

describe('AnimaWeaveCreatorComponent', () => {
  let component: AnimaWeaveCreatorComponent;
  let fixture: ComponentFixture<AnimaWeaveCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaWeaveCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaWeaveCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
