import { Licitacao } from "./licitacao.model";
import { Fornecedor } from "./fornecedor.model";
import { Insumo } from "./insumo.model";

export class Fornecimento {
  constructor(
    public licitacao: Licitacao,
    public fornecedor: Fornecedor,
    public insumo: Insumo,
    public preco: number,
    public media?: number,
  ) {
  }
}
