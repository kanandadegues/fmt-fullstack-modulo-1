import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDoisComponent } from './formulario-dois.component';

describe('FormularioDoisComponent', () => {
  let component: FormularioDoisComponent;
  let fixture: ComponentFixture<FormularioDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
