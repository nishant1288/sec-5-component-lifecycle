import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoCheckChildComponent } from './do-check-child.component';

describe('DoCheckChildComponent', () => {
  let component: DoCheckChildComponent;
  let fixture: ComponentFixture<DoCheckChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoCheckChildComponent]
    });
    fixture = TestBed.createComponent(DoCheckChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
