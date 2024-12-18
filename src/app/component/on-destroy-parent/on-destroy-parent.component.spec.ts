import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnDestroyParentComponent } from './on-destroy-parent.component';

describe('OnDestroyParentComponent', () => {
  let component: OnDestroyParentComponent;
  let fixture: ComponentFixture<OnDestroyParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnDestroyParentComponent]
    });
    fixture = TestBed.createComponent(OnDestroyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
