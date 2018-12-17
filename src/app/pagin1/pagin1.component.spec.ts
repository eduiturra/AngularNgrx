import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagin1Component } from './pagin1.component';

describe('Pagin1Component', () => {
  let component: Pagin1Component;
  let fixture: ComponentFixture<Pagin1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagin1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
