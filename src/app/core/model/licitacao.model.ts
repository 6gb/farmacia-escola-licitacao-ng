import { Fornecimento } from "./fornecimento.model";

export class Licitacao {
  constructor(
    public id: number,
    public dataCriacao?: Date,
    public fornecimentos?: Array<Fornecimento>
  ) {
  }
}
