import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoInputComponent } from './hijo-input.component';

describe('HijoInputComponent', () => {
  let component: HijoInputComponent;
  let fixture: ComponentFixture<HijoInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
