import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormZonesComponent } from './form-zones.component';

describe('FormZonesComponent', () => {
  let component: FormZonesComponent;
  let fixture: ComponentFixture<FormZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormZonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
