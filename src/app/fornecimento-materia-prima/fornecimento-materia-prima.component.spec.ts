import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecimentoMateriaPrimaComponent } from './fornecimento-materia-prima.component';

describe('FornecimentoMateriaPrimaComponent', () => {
  let component: FornecimentoMateriaPrimaComponent;
  let fixture: ComponentFixture<FornecimentoMateriaPrimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecimentoMateriaPrimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecimentoMateriaPrimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
