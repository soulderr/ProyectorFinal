import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguaYLiteraturaComponent } from './lengua-yliteratura.component';

describe('LenguaYLiteraturaComponent', () => {
  let component: LenguaYLiteraturaComponent;
  let fixture: ComponentFixture<LenguaYLiteraturaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenguaYLiteraturaComponent]
    });
    fixture = TestBed.createComponent(LenguaYLiteraturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
