import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscaleraComponent } from './escalera.component';

describe('EscaleraComponent', () => {
  let component: EscaleraComponent;
  let fixture: ComponentFixture<EscaleraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscaleraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscaleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
