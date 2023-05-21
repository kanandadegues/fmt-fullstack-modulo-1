import { TestBed } from '@angular/core/testing';

import { FormularioDoisService } from './formulario-dois.service';

describe('FormularioDoisService', () => {
  let service: FormularioDoisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioDoisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
