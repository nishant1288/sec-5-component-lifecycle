import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangesChildComponent } from './on-changes-child.component';

describe('OnChangesChildComponent', () => {
  let component: OnChangesChildComponent;
  let fixture: ComponentFixture<OnChangesChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnChangesChildComponent]
    });
    fixture = TestBed.createComponent(OnChangesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
