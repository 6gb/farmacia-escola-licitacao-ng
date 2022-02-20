export class Fornecedor {
  constructor(
    public id: number,
    public cnpj: string,
    public nome: string,
    public endereco: string,
    public telefone: string,
    public email: string,
    public sicaf: string
  ) {
  }
}
