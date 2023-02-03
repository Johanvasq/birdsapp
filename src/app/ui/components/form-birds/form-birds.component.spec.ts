import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBirdsComponent } from './form-birds.component';

describe('FormBirdsComponent', () => {
  let component: FormBirdsComponent;
  let fixture: ComponentFixture<FormBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBirdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
