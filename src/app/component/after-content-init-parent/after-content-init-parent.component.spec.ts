import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterContentInitParentComponent } from './after-content-init-parent.component';

describe('AfterContentInitParentComponent', () => {
  let component: AfterContentInitParentComponent;
  let fixture: ComponentFixture<AfterContentInitParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterContentInitParentComponent]
    });
    fixture = TestBed.createComponent(AfterContentInitParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
