import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecimentoEmbalagemComponent } from './fornecimento-embalagem.component';

describe('FornecimentoEmbalagemComponent', () => {
  let component: FornecimentoEmbalagemComponent;
  let fixture: ComponentFixture<FornecimentoEmbalagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecimentoEmbalagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecimentoEmbalagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
