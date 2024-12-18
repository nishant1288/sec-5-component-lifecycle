import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDestroyChildComponent } from './on-destroy-child.component';

describe('OnDestroyChildComponent', () => {
  let component: OnDestroyChildComponent;
  let fixture: ComponentFixture<OnDestroyChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnDestroyChildComponent]
    });
    fixture = TestBed.createComponent(OnDestroyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
