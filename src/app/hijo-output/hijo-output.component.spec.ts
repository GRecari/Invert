import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoOutputComponent } from './hijo-output.component';

describe('HijoOutputComponent', () => {
  let component: HijoOutputComponent;
  let fixture: ComponentFixture<HijoOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
