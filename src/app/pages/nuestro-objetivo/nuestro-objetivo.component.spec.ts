import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroObjetivoComponent } from './nuestro-objetivo.component';

describe('NuestroObjetivoComponent', () => {
  let component: NuestroObjetivoComponent;
  let fixture: ComponentFixture<NuestroObjetivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestroObjetivoComponent]
    });
    fixture = TestBed.createComponent(NuestroObjetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
