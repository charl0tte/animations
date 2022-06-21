import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrutalismComponent } from './brutalism.component';

describe('BrutalismComponent', () => {
  let component: BrutalismComponent;
  let fixture: ComponentFixture<BrutalismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrutalismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrutalismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
